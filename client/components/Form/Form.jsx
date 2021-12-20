import { useContext, useState } from 'react'
import { host } from '../../http'
import { Context } from '../../pages/_app'

const Form = () => {
  const { basket } = useContext(Context)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    note: '',
  })

  const { name, phone, note } = formData

  const handleChangeName = (e) => {
    setFormData({ ...formData, name: e.target.value })
  }

  const handleChangePhone = (e) => {
    setFormData({ ...formData, phone: e.target.value })
  }

  const handleChangeNote = (e) => {
    setFormData({ ...formData, note: e.target.value })
  }

  const handleMakeOrder = async () => {
    const totalPrice = basket.reduce(
      (acc, { price, amount }) => acc + price * amount,
      0
    )

    const myProducts = basket
    .map((product) => `${product.url}: Количество: ${product.amount}`)
    .join('\n')

    const message = `Новый заказ!\n\nИмя: ${name}\nТелефон: ${phone}\nПримечание: ${note}\n\nСписок товаров:\n ${myProducts}\n\nИтоговая цена: ${totalPrice} BYN`

    const { data } = await host.post('api/bot', { message })

    return data
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={handleChangeName}
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Ваш телефон"
          value={phone}
          onChange={handleChangePhone}
          required
        />
      </div>
      <div>
        <textarea
          type="text"
          placeholder="Примечание"
          value={note}
          onChange={handleChangeNote}
        />
      </div>
      <button onClick={handleMakeOrder}>Заказать</button>
    </form>
  )
}

export default Form
