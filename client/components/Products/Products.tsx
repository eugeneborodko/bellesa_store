import { FC } from 'react'
import { IProducts } from '../../interfaces/IProducts'

interface ProductsProps {
  products: IProducts[],
}

const Products: FC<ProductsProps> = ({products}) => {
  return (
    <div>
      {products.map(({ id, name, price, img}) => (
        <div key={id}>name: {name} price: {price} img: {img}</div>
      ))}
    </div>
  )
}

export default Products
