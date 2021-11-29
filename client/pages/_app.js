import { createContext } from 'react'
import Admin from '../store/Admin'
import Product from '../store/Product'
import '../styles/globals.scss'

export const Context = createContext(null)

const MyApp = ({ Component, pageProps }) => {
  return (
    <Context.Provider value={{
      admin: new Admin(),
      product: new Product(),
    }}>
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export default MyApp
