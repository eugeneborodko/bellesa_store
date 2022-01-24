import type { NextPage, GetStaticProps } from 'next'
import { Home } from '../components'
import { ICategories } from '../interfaces/ICategories'
import { IBrands } from '../interfaces/IBrands'
import { host } from '../http/index'
import { CATEGORIES, BRANDS, PRODUCTS } from '../constants/internalLinks'
import { IProducts } from '../interfaces/IProducts'

interface HomePageProps {
  categories: ICategories[],
  brands: IBrands[],
  products: IProducts[],
}

const HomePage: NextPage<HomePageProps> = ({ brands, categories, products }) => {
  return (
    <Home brands={brands} categories={categories} products={products} />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const categories = await host.get(CATEGORIES)
  const brands = await host.get(BRANDS)
  const products = await host.get(PRODUCTS)

  return {
    props: {
      categories: categories.data,
      brands: brands.data,
      products: products.data,
    },
  }
}

export default HomePage
