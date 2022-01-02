import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { PRODUCT_ROUTE } from '../../../constants/routes'
import { Context } from '../../../pages/_app'
import cl from './ProductsItem.module.scss'

const ProductsItem = ({ product, mainPage, basketPage, setCounterVisible }) => {
  const { basket, setBasket, productCounter } = useContext(Context)
  const { id, name, price, img, amount } = product
  const router = useRouter()

  const productToBasket = {
    name,
    price,
    img,
  }

  const handleAddToBasket = () => {
    const url = `${process.env.NEXT_PUBLIC_DEV_URL}${router.asPath}`
    setBasket((prev) => [
      ...prev,
      { ...productToBasket, amount: productCounter.counter, url },
    ])
    if (setCounterVisible) {
      setCounterVisible(false)
    }
  }

  const isProductInBasket = () => {
    const filtered = basket.filter(({ name }) => name === productToBasket.name)
    return !!filtered.length
  }

  const handleRemoveFromBasket = () => {
    const filtered = basket.filter(({ name }) => productToBasket.name !== name)
    setBasket(filtered)
    localStorage.setItem('basket', JSON.stringify(filtered))
    if (setCounterVisible) {
      setCounterVisible(true)
    }
  }

  return (
    <>
      {mainPage ? (
        <Link href="/product/[id]" as={`${PRODUCT_ROUTE}/${id}`}>
          <a className={cl.item}>
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${img}`}
              alt={name}
              width={233}
              height={233}
            />
            <div className={cl.info}>
              <span className={cl.name}>{name}</span>
              <span className={cl.price}>{price} BYN</span>
            </div>
            <button className={cl.button}>Подробнее</button>
          </a>
        </Link>
      ) : (
        <div className={cl.productPreview}>
          <div className={cl.item2}>
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${img}`}
              alt={name}
              width={300}
              height={300}
            />
            <div className={cl.info}>
              <span className={cl.name}>{name}</span>
              <span className={cl.price}>{price} BYN</span>
              {!isProductInBasket() ? (
                <button className={cl.button} onClick={handleAddToBasket}>
                  Добавить в корзину
                </button>
              ) : (
                <>
                  {!basketPage && (
                    <h3 className={cl.subtitle}>Товар в корзине</h3>
                  )}

                  <button
                    className={cl.button}
                    onClick={handleRemoveFromBasket}
                  >
                    Удалить из корзины
                  </button>
                </>
              )}
              {basketPage && (
                <div>
                  <div>Количество: {amount} </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductsItem
