import { FC } from 'react'
import { IBrands } from '../../interfaces/IBrands'
import { ICategories } from '../../interfaces/ICategories'
import { IProducts } from '../../interfaces/IProducts'
import { Categories, Brands, Products } from '../index'
import classes from './Home.module.scss'

interface HomeProps {
  brands: IBrands[],
  categories: ICategories[],
  products: IProducts[],
}

const Home: FC<HomeProps> = ({ brands, categories, products}) => {
  return (
    <div className={classes.home}>
      <Categories categories={categories} />
      <Brands brands={brands} />
      <Products products={products} />
    </div>
  )
}

export default Home
