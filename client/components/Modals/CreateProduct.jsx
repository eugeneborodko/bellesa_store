import { memo, useContext, useState } from 'react'
import { Context } from '../../pages/_app'
import cl from './CreateCategory.module.scss'

const CreateProduct = ({ isVisible, setIsVisible }) => {
  const { product } = useContext(Context)
  const [info, setInfo] = useState([])
  const modalClass = [cl.modal]

  if (isVisible) {
    modalClass.push(cl.visible)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleAddInfo = () => {
    setInfo([...info, {title: '', description: '', id: Date.now()}])
  }

  const handleRemoveInfo = (num) => {
    const filtered = info.filter(({id}) => id !== num )
    setInfo(filtered)
  }

  return (
    <>
      <div className={modalClass.join(' ')}>
        <h1>Добавить товар</h1>
        <div>
          <select name="products">
            {product.categories.map(({ id, name, value }) => (
              <option key={id} value={value}>
                {name}
              </option>
            ))}
          </select>
          <select name="brands">
            {product.brands.map(({ id, name, value }) => (
              <option key={id} value={value}>
                {name}
              </option>
            ))}
          </select>
          <div>
            <div>
              <input type="text" placeholder="Название товара" />
            </div>
            <div>
              <input type="number" placeholder="Цена" />
            </div>
            <div>
              <input type="file" />
            </div>
          </div>
          <hr />
          <button onClick={handleAddInfo}>Добавить новое свойство</button>
          {info.map(({id}) => (
            <div key={id}>
              <div>
                <input type="text" placeholder="Название товара" />
              </div>
             <div>
                <input type="text" placeholder="Описание товара" />
              </div>
              <div>
                <button onClick={() => handleRemoveInfo(id)}>Удалить</button>
              </div>
            </div>
          ))}
        </div>
        <button>Добавить</button>
        <button onClick={handleClose}>Закрыть</button>
      </div>
    </>
  )
}

export default memo(CreateProduct)
