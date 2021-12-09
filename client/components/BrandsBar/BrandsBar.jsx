import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '../../pages/_app'
import cl from './BrandsBar.module.scss'

const BrandsBar = observer(() => {
  const { product } = useContext(Context)

  const handleClick = (id) => {
    product.setSelectedBrand(id)
  }

  return (
    <div className={cl.brandsList}>
      {product.brands.map(({ id, name }) => {
        const brandClass = [cl.brand]
        if (id === product.selectedBrand) {
          brandClass.push(cl.active)
        }

        return (
          <div className={brandClass.join(' ')} key={id} onClick={() => handleClick(id)}>
            {name}
          </div>
        )
      })}
    </div>
  )
})

export default BrandsBar
