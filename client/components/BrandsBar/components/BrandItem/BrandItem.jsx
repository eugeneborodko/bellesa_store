import { observer } from 'mobx-react-lite'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../../../pages/_app'
import cl from './BrandItem.module.scss'

const BrandItem = observer(({ id, name, result, setResult }) => {
  const { product } = useContext(Context)

  const [isSelected, setIsSelected] = useState(false)

  const brandClass = [cl.brand]

  if (isSelected) {
    brandClass.push(cl.active)
  }

  const handleClick = (id) => {
    return () => {
      product.setSelectedBrand(id)
      addBrandToStorage(id)
      setIsSelected((prev) => !prev)
    }
  }

  const addBrandToStorage = (id) => {
    if (isSelected) {
      const filtered = result.filter((el) => el !== id)
      setResult(filtered)
    } else {
      setResult((prev) => [...prev, id])
    }
  }

  useEffect(() => {
    localStorage.setItem('brand', JSON.stringify(result))
  }, [result])

  return (
    <>
      <div className={brandClass.join(' ')} key={id} onClick={handleClick(id)}>
        {name}
      </div>
    </>
  )
})

export default BrandItem
