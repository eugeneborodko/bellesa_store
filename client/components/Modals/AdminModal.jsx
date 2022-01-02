import { memo, useContext } from 'react'
import { Context } from '../../pages/_app'
import { createProduct } from '../../http/productAPI'
import {
  CATEGORY_CREATED,
  BRAND_CREATED,
  PRODUCT_CREATED,
  FILL_FIELDS,
} from '../../constants/userMessages'
import cl from './AdminModal.module.scss'

const AdminModal = ({
  isVisible,
  setIsVisible,
  value,
  setValue,
  title,
  create,
  children,
  categoryModal,
  brandModal,
  productModal,
}) => {
  const { product } = useContext(Context)
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

    if (categoryModal) {
      alert(CATEGORY_CREATED)
    } else if (brandModal) {
      alert(BRAND_CREATED)
    }
  }

  const createNewProduct = async () => {
    const { name, price, file, info } = value
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)
    formData.append('img', file)
    formData.append('info', JSON.stringify(info))
    formData.append('categoryId', product.selectedCategory)
    formData.append('brandId', product.selectedBrand)
    await createProduct(formData)
    handleClose()
    alert(PRODUCT_CREATED)
  }

  const handleCreateNewType = () => {
    if (categoryModal || brandModal) {
      if (value) {
        createType()
      } else {
        alert(FILL_FIELDS)
      }
    } else if (productModal) {
      const { name, price, file } = value
      const isFormFilled = name && price > 0 && file
      if (isFormFilled) {
        createNewProduct()
      } else {
        alert(FILL_FIELDS)
      }
    }
  }

  return (
    <div className={modalClass.join(' ')}>
      <h1 className={cl.title}>{title}</h1>
      <form className={cl.form} onSubmit={handleSubmit}>
        {children}
        <div className={cl.buttons}>
          <button className={`${cl.button} ${cl.actionButton}`} onClick={handleCreateNewType}>
            Добавить
          </button>
          <button className={`${cl.button} ${cl.actionButton}`} onClick={handleClose}>
            Закрыть
          </button>
        </div>
      </form>
    </div>
  )
}

export default memo(AdminModal)
