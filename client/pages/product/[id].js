import { useRouter } from 'next/router'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../_app'
import { PRODUCT_ROUTE } from '../../constants/routes'
import Layout from '../../components/Layout/Layout'
import { getOneProduct } from '../../http/productAPI'

const Product = () => {
  const { product } = useContext(Context)
  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState({ info: [] })

  useEffect(() => {
    getOneProduct(id).then((res) => setProduct(res))
  }, [])

  return (
    <Layout>
      <div className="container">
        <div style={{ display: 'flex' }}>
          123
          <div href="/product/[id]" as={`${PRODUCT_ROUTE}/${id}`}>
            <Image
              src={`http://localhost:5000/${product.img}`}
              alt={product.name}
              width={182}
              height={182}
            />
            <div>{product.name}</div>
            <div>Цена: {product.price} BYN</div>
          </div>
          <div>
            {product.info.map(({ id, title, description }) => {
              return (
                <div key={id}>
                  {title}: {description}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Product
