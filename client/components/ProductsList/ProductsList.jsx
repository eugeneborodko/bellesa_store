import { useContext } from "react"
import { observer } from "mobx-react-lite"
import { Context } from "../../pages/_app"
import ProductsItem from "./components/ProductsItem"
import cl from './ProductsList.module.scss'

const ProductsList = observer(() => {
  const { product } = useContext(Context)

  return (
   <div className={cl.list}>
     {product.products.map((product) => {
       return (
         <ProductsItem key={product.id} product={product} />
       )
     })}
   </div>
  )
})

export default ProductsList