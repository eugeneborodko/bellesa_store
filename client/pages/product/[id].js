import { useRouter } from 'next/router'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { PRODUCT_ROUTE } from '../../constants/routes'
import Layout from '../../components/Layout/Layout'
import Counter from '../../components/Counter/Counter'
import { getOneProduct } from '../../http/productAPI'
import { Context } from '../_app'
import { observer } from 'mobx-react-lite'

const Product = observer(() => {
  const router = useRouter()
  const { productPrice } = useContext(Context)
  const { id } = router.query
  const [product, setProduct] = useState({ info: [] })

  const handleAddToBasket = () => {
    // console.log(product.name, product.price, product.img)
  }

  useEffect(() => {
    getOneProduct(id).then((res) => setProduct(res))
  }, [])

  useEffect(() => {
    productPrice.setPrice(product.price)
  }, [product.price])

  return (
    <Layout>
      <div className="container">
        <div style={{ display: 'flex' }}>
          <div href="/product/[id]" as={`${PRODUCT_ROUTE}/${id}`}>
            <Image
              src={`http://localhost:5000/${product.img}`}
              alt={product.name}
              width={182}
              height={182}
            />
            <div>{product.name}</div>
            <div>Цена: {product.price} BYN</div>
            <button onClick={handleAddToBasket}>Добавить в корзину</button>
          </div>
          <div>
            {product.info.map(({ id, title, description }) => {
              return (
                <div key={id}>
                  {title}: {description}
                </div>
              )
            })}
          </div>
          <Counter price={product.price} />
          <div>Total price: {productPrice.price}</div>
        </div>
      </div>
    </Layout>
  )
})

export default Product
