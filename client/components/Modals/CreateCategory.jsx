import { useState, memo } from 'react'
import { createCategory } from '../../http/productAPI'
import cl from './CreateCategory.module.scss'

const CreateCategory = ({ isVisible, setIsVisible }) => {
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

  const handleAddCategory = () => {
    const category = { name: value }
    createCategory(category)
    setValue('')
    handleClose()
  }

  return (
    <>
      <div className={modalClass.join(' ')}>
        <h1>Добавить категорию</h1>
        <form>
          <input
            type="text"
            placeholder="Название категории"
            value={value}
            onChange={handleOnChange}
          />
        </form>
        <button onClick={handleAddCategory}>Добавить</button>
        <button onClick={handleClose}>Закрыть</button>
      </div>
    </>
  )
}

export default memo(CreateCategory)
