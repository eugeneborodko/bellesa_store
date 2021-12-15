import Link from 'next/link'
import { useContext } from 'react'
import { Context } from '../../../../pages/_app'

const Header = () => {
  const { basket } = useContext(Context)

  const productsInBasket = () => {
    const productsAmount = basket.reduce((acc, { amount }) => acc + amount, 0)
    return productsAmount
  }

  return (
    <>
      <div>header</div>
      <Link href="/basket">
        <a>Корзина {productsInBasket()} </a>
      </Link>
    </>
  )
}

export default Header
