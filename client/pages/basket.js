import { useContext, useEffect } from 'react'
import { Context } from './_app'
import Layout from '../components/Layout/Layout'
import ProductsItem from '../components/ProductsList/components/ProductsItem'
import Form from '../components/Form/Form'

const BasketPage = () => {
  const { basket, setBasket } = useContext(Context)

  useEffect(() => {
    const basketFromStorage = JSON.parse(localStorage.getItem('basket')) || []
    setBasket(basketFromStorage)
  }, [])

  return (
    <Layout>
      <h1>Корзина</h1>
      <div>
        {basket.map((product) => {
          return (
            <ProductsItem key={product.name} product={product} basketPage/>
          )
        })}
      </div>
      {!!basket.length && (
        <Form />
      )}
    </Layout>
  )
}

export default BasketPage
