import { memo, useContext, useState, useEffect } from 'react'
import { Context } from '../../pages/_app'
import { getCategory, getBrands, createProduct } from '../../http/productAPI'
import cl from './CreateCategory.module.scss'
import { observer } from 'mobx-react-lite'

const CreateProduct = observer(({ isVisible, setIsVisible }) => {
  const { product } = useContext(Context)
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('')
  const [info, setInfo] = useState([])
  const modalClass = [cl.modal]

  if (isVisible) {
    modalClass.push(cl.visible)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleAddInfo = () => {
    setInfo([...info, { title: '', description: '', id: Date.now() }])
  }

  const handleRemoveInfo = (num) => {
    const filtered = info.filter(({ id }) => id !== num)
    setInfo(filtered)
  }

  const handleSelectFile = (event) => {
    setFile(event.target.files[0])
  }

  const handleChangeName = (event) => {
    setName(event.target.value)
  }

  const handleChangePrice = (event) => {
    setPrice(Number(event.target.value))
  }

  const handleChangeSelectedCategory = (event) => {
    setSelectedCategory(event.target.value)
  }

  const handleChangeSelectedBrand = (event) => {
    setSelectedBrand(event.target.value)
  }

  const handleChangeInfo = (key, value, number) => {
    setInfo(info.map((i) => (i.id === number ? { ...i, [key]: value } : i)))
  }

  const handleAddProduct = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)
    formData.append('img', file)
    formData.append('info', JSON.stringify(info))
    createProduct(formData).then(res => handleClose())
  }

  useEffect(() => {
    getCategory().then((res) => product.setCategories(res))
    getBrands().then((res) => product.setBrands(res))
  }, [])

  return (
    <>
      <div className={modalClass.join(' ')}>
        <h1>Добавить товар</h1>
        <div>
          <select
            name="products"
            value={selectedCategory}
            onChange={handleChangeSelectedCategory}
          >
            {product.categories.map(({ id, name }) => {
              return (
                <option key={id} value={name}>
                  {name}
                </option>
              )
            })}
          </select>
          <select
            name="brands"
            value={selectedBrand}
            onChange={handleChangeSelectedBrand}
          >
            {product.brands.map(({ id, name }) => (
              <option key={id} value={name}>
                {name}
              </option>
            ))}
          </select>
          <div>
            <div>
              <input
                type="text"
                placeholder="Название товара"
                value={name}
                onChange={handleChangeName}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Цена"
                value={price}
                onChange={handleChangePrice}
              />
            </div>
            <div>
              <input type="file" onChange={handleSelectFile} />
            </div>
          </div>
          <hr />
          <button onClick={handleAddInfo}>Добавить новое свойство</button>
          {info.map((i) => {
            return (
              <div key={i.id}>
                <div>
                  <input
                    type="text"
                    placeholder="Название товара"
                    value={i.title}
                    onChange={(e) =>
                      handleChangeInfo('title', e.target.value, i.id)
                    }
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Описание товара"
                    value={i.description}
                    onChange={(e) =>
                      handleChangeInfo('description', e.target.value, i.id)
                    }
                  />
                </div>
                <div>
                  <button onClick={() => handleRemoveInfo(id)}>Удалить</button>
                </div>
              </div>
            )
          })}
        </div>
        <button onClick={handleAddProduct}>Добавить</button>
        <button onClick={handleClose}>Закрыть</button>
      </div>
    </>
  )
})

export default memo(CreateProduct)
