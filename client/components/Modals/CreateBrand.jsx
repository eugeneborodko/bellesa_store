import { useState, memo } from 'react'
import { createBrand } from '../../http/productAPI'
import cl from './CreateCategory.module.scss'

const CreateBrand = ({ isVisible, setIsVisible }) => {
  const [value, setValue] = useState('')
  const modalClass = [cl.modal]

  if (isVisible) {
    modalClass.push(cl.visible)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleOnChange = (event) => {
    setValue(event.target.value)
  }

  const handleAddBrand = () => {
    createBrand({name: value}).then(res => {
      setValue('')
      handleClose()
    })
  }

  return (
    <>
      <div className={modalClass.join(' ')}>
        <h1>Добавить бренд</h1>
        <form>
          <input type="text" placeholder="Название бренда" value={value} onChange={handleOnChange} />
        </form>
        <button onClick={handleAddBrand}>Добавить</button>
        <button onClick={handleClose}>Закрыть</button>
      </div>
    </>
  )
}

export default memo(CreateBrand)