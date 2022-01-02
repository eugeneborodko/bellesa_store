import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import Counter from '../../components/Counter/Counter'
import { getOneProduct } from '../../http/productAPI'
import { Context } from '../_app'
import { observer } from 'mobx-react-lite'
import ProductsItem from '../../components/ProductsList/components/ProductsItem'

const Product = observer(() => {
  const router = useRouter()
  const { productPrice, basket, setBasket } =
    useContext(Context)
  const { id } = router.query
  const [product, setProduct] = useState({ info: [] })
  const [counterVisible, setCounterVisible] = useState(true)

  useEffect(() => {
    const basketFromStorage = localStorage.getItem('basket') || []
    setBasket(JSON.parse(basketFromStorage))
  }, [])

  useEffect(async () => {
    const oneProduct = await getOneProduct(id)
    setProduct(oneProduct)
  }, [id])

  useEffect(() => {
    productPrice.setPrice(product.price)
  }, [product.price])

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket))
  }, [basket])

  return (
    <Layout>
      <div style={{ display: 'flex' }}>
        <ProductsItem product={product} setCounterVisible={setCounterVisible} />
        <div>
          {product.info.map(({ id, title, description }) => {
            return (
              <div className="description" key={id}>
                {title}: {description}
              </div>
            )
          })}
          <Counter price={product.price} isVisible={counterVisible} />
          <p>Итого: {productPrice.price} BYN</p>
        </div>
      </div>
    </Layout>
  )
})

export default Product
