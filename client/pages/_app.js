import { createContext, useState } from 'react'
import Admin from '../store/Admin'
import Product from '../store/Product'
import ProductPrice from '../store/Price'
import ProductCounter from '../store/Counter'
import '../styles/globals.scss'

export const Context = createContext(null)

const MyApp = ({ Component, pageProps }) => {
  const [basket, setBasket] = useState([])

  return (
    <Context.Provider value={{
      admin: new Admin(),
      product: new Product(),
      productPrice: new ProductPrice(),
      productCounter: new ProductCounter(),
      basket,
      setBasket
    }}>
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export default MyApp
