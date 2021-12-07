import { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from './_app'
import { getBrands, getCategory, getProducts } from '../http/productAPI'
import Layout from '../components/Layout/Layout'
import NavBar from '../components/NavBar/NavBar'
import BrandsBar from '../components/BrandsBar/BrandsBar'
import ProductsList from '../components/ProductsList/ProductsList'

const HomePage = observer(() => {
  const { product } = useContext(Context)

  useEffect(() => {
    getCategory().then((res => product.setCategories(res)))
    getBrands().then(res => product.setBrands(res))
    getProducts().then(res => product.setProducts(res))
  }, [])

  return (
    <Layout>
      <div className="container">
        <div className="catalog">
          <NavBar />
          <div className="products">
            <BrandsBar />
            <ProductsList />
          </div>
        </div>
      </div>
    </Layout>
  )
})

export default HomePage
