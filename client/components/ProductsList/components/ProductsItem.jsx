import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { PRODUCT_ROUTE } from '../../../constants/routes'
import { Context } from '../../../pages/_app'
import cl from './ProductsItem.module.scss'

const ProductsItem = ({ product, removeProduct }) => {
  const { basket, setBasket } = useContext(Context)
  const { id, name, price, img, amount } = product

  const handleRemoveFromBasket = () => {
    const productToBasket = {
      name,
      price,
      img,
    }
    const filtered = basket.filter(({ name }) => productToBasket.name !== name)
    setBasket(filtered)
    localStorage.setItem('basket', JSON.stringify(filtered))
  }

  return (
    <>
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
      {removeProduct && (
        <div>
          <div>Количество: {amount} </div>
          <button onClick={handleRemoveFromBasket}>Удалить из корзины</button>
        </div>
      )}
    </>
  )
}

export default ProductsItem
