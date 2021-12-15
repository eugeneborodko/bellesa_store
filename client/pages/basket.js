import { useContext, useEffect } from 'react'
import { Context } from './_app'
import Layout from '../components/Layout/Layout'
import ProductsItem from '../components/ProductsList/components/ProductsItem'

const Basket = () => {
  const { basket, setBasket } = useContext(Context)

  useEffect(() => {
    setBasket(JSON.parse(localStorage.getItem('basket')) || [])
  }, [])

  return (
    <Layout>
      <h1>Basket page</h1>
      <div>
        {basket.map((product) => {
          return (
            <ProductsItem key={product.id} product={product} removeProduct />
          )
        })}
      </div>
    </Layout>
  )
}

export default Basket
