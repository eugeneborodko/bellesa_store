import { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from './_app'
import { getBrands, getCategory, getAllProducts, getProducts } from '../http/productAPI'
import Layout from '../components/Layout/Layout'
import Home from '../components/Home/Home'

const HomePage = observer(({ categories, brands }) => {
  const { product } = useContext(Context)

  useEffect(() => {
    product.setCategories(categories)
    product.setBrands(brands)
  }, [])

  useEffect(async () => {
    // if (!product.selectedCategory && !product.selectedBrand)
    console.log('selectedCategory: ', product.selectedCategory)
    console.log('selectedBrand: ', product.selectedBrand)
    const allProducts = await getAllProducts()
    const products = await getProducts(
      product.selectedCategory,
      product.selectedBrand,
      product.page,
      product.limit
    )
    console.log('allProducts: ', allProducts)
    product.setProducts(products)
    product.setTotalCount(allProducts.length)
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
