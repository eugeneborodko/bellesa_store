import { createContext } from 'react'
import Admin from '../store/Admin'
import Product from '../store/Product'
import ProductPrice from '../store/Price'
import '../styles/globals.scss'

export const Context = createContext(null)

const MyApp = ({ Component, pageProps }) => {
  return (
    <Context.Provider value={{
      admin: new Admin(),
      product: new Product(),
      productPrice: new ProductPrice(),
    }}>
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export default MyApp
