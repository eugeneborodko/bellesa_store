import { memo, useContext, useEffect } from 'react'
import { Context } from '../../pages/_app'
import { getCategory, getBrands } from '../../http/productAPI'
import { observer } from 'mobx-react-lite'
import Select from './Select'
import Input from './Input'
import cl from './AdminModal.module.scss'

const CreateProduct = observer(({ value, setValue }) => {
  const { product } = useContext(Context)

  const { name, price, info, file } = value

  const handleChangeInput = (key) => {
    return (e) => {
      let options
      if (key === 'file') {
        options = { ...value, file: e.target.files[0] }
      } else {
        options = { ...value, [key]: e.target.value }
      }
      setValue(options)
    }
  }

  const handleChangeSelectedCategory = (event) => {
    product.setSelectedCategory(event.target.value)
  }

  const handleChangeSelectedBrand = (event) => {
    product.setSelectedBrand(event.target.value)
  }

  const handleAddInfo = () => {
    const optionsInfo = [{ title: '', description: '', id: Date.now() }]
    const options = { ...value, info: [...info, ...optionsInfo] }
    setValue(options)
  }

  const handleChangeInfo = (key, number) => {
    return (e) => {
      const optionsInfo = info.map((i) =>
        i.id === number ? { ...i, [key]: e.target.value } : i
      )
      const options = { ...value, info: optionsInfo }
      setValue(options)
    }
  }

  const handleRemoveInfo = (num) => {
    return () => {
      const filtered = info.filter(({ id }) => id !== num)
      const options = { ...value, info: filtered }
      setValue(options)
    }
  }

  useEffect(async () => {
    const categories = await getCategory()
    const brands = await getBrands()

    product.setCategories(categories)
    product.setBrands(brands)
  }, [])

  return (
    <div>
      <Select
        className={cl.input}
        name="categories"
        onChange={handleChangeSelectedCategory}
        options={product.categories}
      />
      <Select
        className={cl.input}
        name="brands"
        onChange={handleChangeSelectedBrand}
        options={product.brands}
      />
      <div className={cl.inputs}>
        <Input
          className={cl.input}
          type="text"
          placeholder="Название товара"
          value={name}
          onChange={handleChangeInput('name')}
        />
        <Input
          className={cl.input}
          type="number"
          placeholder="Цена товара"
          value={price}
          onChange={handleChangeInput('price')}
        />
        <label className={cl.button} for="file">
          Добавить фото
        </label>
        <input
          className={cl.file}
          id="file"
          type="file"
          onChange={handleChangeInput('file')}
        />
        {file?.name && <span className={cl.imgCaption}>Загружено изображение {file.name}</span>}
      </div>
      <button
        className={`${cl.button} ${cl.buttonCenter}`}
        onClick={handleAddInfo}
      >
        Добавить новое свойство
      </button>
      {info.map((i) => {
        return (
          <div className={cl.inputs} key={i.id}>
            <Input
              className={cl.input}
              type="text"
              placeholder="Название свойства"
              value={i.title}
              onChange={handleChangeInfo('title', i.id)}
            />
            <Input
              className={cl.input}
              type="text"
              placeholder="Описание свойства"
              value={i.description}
              onChange={handleChangeInfo('description', i.id)}
            />
            <button className={cl.button} onClick={handleRemoveInfo(i.id)}>
              Удалить
            </button>
          </div>
        )
      })}
    </div>
  )
})

export default memo(CreateProduct)
