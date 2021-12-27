
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BASKET } from '../../../../../../constants/internalLinks'
import { CONTACTS } from '../../../../../../constants/externalLinks'
import cl from './Contacts.module.scss'

const Contacts = () => {
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
    <div className={cl.contacts}>
      {CONTACTS.map(({ id, body, url }) => (
        <a className={cl.link} href={url} key={id}>
          {body}
        </a>
      ))}
      <Link href={BASKET}>
        <a className={cl.link}>Корзина {productsInBasket()} </a>
      </Link>
    </div>
  )
}

export default Contacts
