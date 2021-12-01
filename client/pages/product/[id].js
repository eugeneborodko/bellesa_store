import { useRouter } from 'next/router'
import { useContext } from 'react'
import { Context } from '../_app'
import Layout from '../../components/Layout/Layout'
import ProductsItem from '../../components/ProductsList/components/ProductsItem'

const Product = () => {
  const { product } = useContext(Context)
  const router = useRouter()
  const { id } = router.query

  const description = [
    {id: 1, title: 'Для лица', description: 'нет'},
    {id: 2, title: 'Для рук', description: 'да'},
    {id: 3, title: 'Для ног', description: 'нет'}
  ]

  return (
    <Layout>
      <div className="container">
        <div style={{display: 'flex'}}>
        <ProductsItem product={product.products[id - 1]} />
        <div>
          {description.map(({id, title, description}) => {
            return (
              <div key={id}>{title}: {description}</div>
            )
          })}
        </div>
        </div>
        
      </div>  
    </Layout>
  )
}

export default Product
