import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../../pages/_app'
import ProductsItem from './components/ProductsItem'
import cl from './ProductsList.module.scss'

const ProductsList = observer(({mainPage}) => {
  const { product } = useContext(Context)

  return (
    <>
      {!!product.products.length ? (
        <div className={cl.list}>
          {product.products.map((product) => {
            return <ProductsItem key={product.id} product={product} mainPage={mainPage} />
          })}
        </div>
      ) : (
        <h2>Товары не найдены</h2>
      )}
    </>
  )
})

export default ProductsList
