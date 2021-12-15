import { useRouter } from 'next/router'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import Counter from '../../components/Counter/Counter'
import { getOneProduct } from '../../http/productAPI'
import { Context } from '../_app'
import { observer } from 'mobx-react-lite'

const Product = observer(() => {
  const router = useRouter()
  const { productPrice, productCounter } = useContext(Context)
  const { id } = router.query
  const [product, setProduct] = useState({ info: [] })
  const [myBasket, setMyBasket] = useState([])

  const productToBasket = {
    name: product.name,
    price: product.price,
    img: product.img,
  }

  const handleAddToBasket = () => {
    for (let i = 0; i < productCounter.counter; i++) {
      setMyBasket((prev) => [...prev, productToBasket])
    }
  }

  const handleRemoveFromBasket = () => {
    const filtered = myBasket.filter(
      ({ name }) => productToBasket.name !== name
    )
    setMyBasket(filtered)
  }

  const isProductInBasket = () => {
    const filtered = myBasket.filter(
      ({ name }) => name === productToBasket.name
    )
    return !!filtered.length
  }

  useEffect(() => {
    const arr = localStorage.getItem('basket') || []
    setMyBasket(JSON.parse(arr))
  }, [])

  useEffect(() => {
    getOneProduct(id).then((res) => setProduct(res))
  }, [id])

  useEffect(() => {
    productPrice.setPrice(product.price)
  }, [product.price])

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(myBasket))
  }, [myBasket])

  return (
    <Layout>
      <div className="container">
        <div style={{ display: 'flex' }}>
          <div>
            <Image
              src={`http://localhost:5000/${product.img}`}
              alt={product.name}
              width={182}
              height={182}
            />
            <div>{product.name}</div>
            <div>Цена: {product.price}</div>
            {/* <button onClick={handleAddToBasket}>Добавить в корзину</button> */}
            {!isProductInBasket() ? (
              <button onClick={handleAddToBasket}>Добавить в корзину</button>
            ) : (
              <>
                <h1>Товар в корзине</h1>
                <button onClick={handleRemoveFromBasket}>
                  Удалить из корзины
                </button>
              </>
            )}
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
