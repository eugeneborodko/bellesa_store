import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '../../pages/_app'
import cl from './BrandsBar.module.scss'

const BrandsBar = observer(() => {
  const { product } = useContext(Context)

  const handleClick = (id) => {
    return () => {
      product.setSelectedBrand(id)
      localStorage.setItem('brand', id)
    }
  }

  return (
    <div className={cl.brandsList}>
      {product.brands.map(({ id, name }) => {
        const brandClass = [cl.brand]
        const isSelected =
          id === product.selectedBrand || id === +localStorage.getItem('brand')

        if (isSelected) {
          brandClass.push(cl.active)
        }

        return (
          <div
            className={brandClass.join(' ')}
            key={id}
            onClick={handleClick(id)}
          >
            {name}
          </div>
        )
      })}
    </div>
  )
})

export default BrandsBar
