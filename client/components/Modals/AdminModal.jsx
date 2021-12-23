import { memo } from 'react'
import cl from './AdminModal.module.scss'

const AdminModal = ({
  isVisible,
  setIsVisible,
  value,
  setValue,
  title,
  create,
  children,
}) => {
  const modalClass = [cl.modal]

  if (isVisible) {
    modalClass.push(cl.visible)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  const createType = () => {
    const type = { name: value }
    create(type)

    setValue('')
    handleClose()
  }

  return (
    <>
      <div className={modalClass.join(' ')}>
        <h1>{title}</h1>
        <form onSubmit={handleSubmit}>
          {children}
          <button onClick={createType}>Добавить</button>
          <button onClick={handleClose}>Закрыть</button>
        </form>
      </div>
    </>
  )
}

export default memo(AdminModal)
