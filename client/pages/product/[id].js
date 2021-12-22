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
  const { productPrice, productCounter, basket, setBasket } =
    useContext(Context)
  const { id } = router.query
  const [product, setProduct] = useState({ info: [] })

  const productToBasket = {
    name: product.name,
    price: product.price,
    img: product.img,
  }

  const handleAddToBasket = () => {
    const url = `${process.env.NEXT_PUBLIC_DEV_URL}${router.asPath}`
    setBasket((prev) => [...prev, {...productToBasket, amount: productCounter.counter, url}])
  }

  const handleRemoveFromBasket = () => {
    const filtered = basket.filter(({ name }) => productToBasket.name !== name)
    setBasket(filtered)
  }

  const isProductInBasket = () => {
    const filtered = basket.filter(
      ({ name }) => name === productToBasket.name
    )
    return !!filtered.length
  }

  useEffect(() => {
    const arr = localStorage.getItem('basket') || []
    setBasket(JSON.parse(arr))
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
      <div className="container">
        <div style={{ display: 'flex' }}>
          <div>
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${product.img}`}
              alt={product.name}
              width={182}
              height={182}
            />
            <div>{product.name}</div>
            <div>Цена: {product.price}</div>
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
