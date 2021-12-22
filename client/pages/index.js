import { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from './_app'
import { getBrands, getCategory, getProducts } from '../http/productAPI'
import Layout from '../components/Layout/Layout'
import NavBar from '../components/NavBar/NavBar'
import BrandsBar from '../components/BrandsBar/BrandsBar'
import ProductsList from '../components/ProductsList/ProductsList'
import Pages from '../components/Pages/Pages'

const HomePage = observer(({ categories, brands }) => {
  const { product } = useContext(Context)

  useEffect(() => {
    //TODO: save products amount after reloading index page
    product.setCategories(categories)
    product.setBrands(brands)
  }, [])

  

  useEffect(async () => {
    const products = await getProducts(
      product.selectedCategory,
      product.selectedBrand,
      product.page,
      product.limit
    )
    product.setProducts(products)
    product.setTotalCount(products.length)
  }, [product.page, product.selectedCategory, product.selectedBrand])

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
        <Pages />
      </div>
    </Layout>
  )
})

export const getStaticProps = async () => {
  const categories = await getCategory()
  const brands = await getBrands()

  return {
    props: {
      categories,
      brands,
    },
  }
}

export default HomePage
