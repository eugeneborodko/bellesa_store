import { useContext, useState } from 'react'
import { phoneRegex } from '../../constants/regex'
import {
  initialFormData,
  initialFormDataErrors,
} from '../../constants/formData'
import { host } from '../../http'
import { Context } from '../../pages/_app'
import cl from './Form.module.scss'

const Form = () => {
  const { basket, setBasket } = useContext(Context)
  const [formData, setFormData] = useState(initialFormData)
  const [formDataErrors, setFormDataErrors] = useState(initialFormDataErrors)

  const { name, phone, note } = formData
  const { nameError, phoneError } = formDataErrors

  const isNote = note ? note : 'Отсутствует'

  const handleChangeName = (e) => {
    setFormData({ ...formData, name: e.target.value })
  }

  const handleChangePhone = (e) => {
    setFormData({ ...formData, phone: e.target.value })
  }

  const handleChangeNote = (e) => {
    setFormData({ ...formData, note: e.target.value })
  }

  const handleClearBasket = () => {
    setFormData(initialFormData)
    setFormDataErrors(initialFormDataErrors)
    setBasket([])
    localStorage.setItem('basket', JSON.stringify([]))
  }

  const handleValidationCheck = () => {
    const isPhone = phoneRegex.test(phone)

    const validName = !!name
    const invalidName = name ? 'Неверное имя' : 'Введите имя'

    const validPhone = !!phone && isPhone
    const invalidPhone = phone ? 'Неверный телефон' : 'Введите телефон'

    const isValid = validName && validPhone

    if (!isValid) {
      setFormDataErrors({
        ...formDataErrors,
        nameError: validName ? '' : invalidName,
        phoneError: validPhone ? '' : invalidPhone,
      })
    }

    return isValid
  }

  const handleMakeOrder = async () => {
    if (handleValidationCheck()) {
      const totalPrice = basket.reduce(
        (acc, { price, amount }) => acc + price * amount,
        0
      )

      const productsList = basket
        .map((product) => `${product.url}: Количество: ${product.amount}`)
        .join('\n')

      const message = `Новый заказ!\n\nИмя: ${name}\nТелефон: ${phone}\nПримечание: ${isNote}\n\nСписок товаров:\n\n ${productsList}\n\nИтоговая цена: ${totalPrice} BYN`

      handleClearBasket()

      alert('Заказ подтвержден!')

      const { data } = await host.post('api/bot', { message })

      return data
    }
  }

  return (
    <>
      <h1>Оформить заказ</h1>
      <form className={cl.form} onSubmit={(e) => e.preventDefault()}>
        <div>
          <span className={cl.error}>{nameError}</span>
          <input
            className={cl.input}
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={handleChangeName}
            required
          />
        </div>
        <div>
          <span className={cl.error}>{phoneError}</span>
          <input
            className={cl.input}
            type="text"
            placeholder="Ваш телефон"
            value={phone}
            onChange={handleChangePhone}
            required
          />
        </div>
        <div>
          <textarea
            className={cl.input}
            type="text"
            placeholder="Примечание"
            value={note}
            onChange={handleChangeNote}
          />
        </div>
        <button className={cl.button} onClick={handleMakeOrder}>
          Подтвердить заказ
        </button>
      </form>
    </>
  )
}

export default Form
