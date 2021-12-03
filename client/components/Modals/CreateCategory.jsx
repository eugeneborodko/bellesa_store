import { memo } from 'react'
import cl from './CreateCategory.module.scss'

const CreateCategory = ({ isVisible, setIsVisible }) => {
  const modalClass = [cl.modal]

  if (isVisible) {
    modalClass.push(cl.visible)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <>
      <div className={modalClass.join(' ')}>
        <h1>Добавить категорию</h1>
        <form>
          <input type="text" placeholder="Название категории" />
        </form>
        <button>Добавить</button>
        <button onClick={handleClose}>Закрыть</button>
      </div>
    </>
  )
}

export default memo(CreateCategory)