import Link from 'next/link'
import { useEffect, useState } from 'react'

const Header = () => {
  const [basket, setBasket] = useState([])

  const productsInBasket = () => {
    let amount = 0
    if (!!basket.length) {
      amount = basket.reduce((acc, { amount }) => acc + amount, 0)
    }
    
    return amount
  }

  useEffect(() => {
    setBasket(JSON.parse(localStorage.getItem('basket')) || [])
  }, [])

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
