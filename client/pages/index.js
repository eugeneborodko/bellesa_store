import { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from './_app'
import { getBrands, getCategory, getAllProducts, getProducts } from '../http/productAPI'
import Layout from '../components/Layout/Layout'
import Home from '../components/Home/Home'

const HomePage = observer(({ categories, brands }) => {
  const { product } = useContext(Context)

  const fetchProducts = async () => {
    const category = +localStorage.getItem('category') || product.selectedCategory
    const brand = +localStorage.getItem('brand') || product.selectedBrand

    const allProducts = await getAllProducts()
    const products = await getProducts(
      category,
      brand,
      product.page,
      product.limit
    )

    product.setProducts(products)
    product.setTotalCount(allProducts.length)

    return products
  }

  useEffect(() => {
    product.setCategories(categories)
    product.setBrands(brands)
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [product.page, product.selectedCategory, product.selectedBrand])

  return (
    <Layout>
     <Home />
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
