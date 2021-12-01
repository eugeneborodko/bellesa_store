import Image from 'next/image'
import Link from 'next/link'
import { PRODUCT_ROUTE } from '../../../constants/routes'
import cl from './ProductsItem.module.scss'

const ProductsItem = ({ product }) => {
  const { id, name, price, img } = product

  return (
    <Link href="/product/[id]" as={`${PRODUCT_ROUTE}/${id}`} >
      <a className={cl.item}>
        <Image src={img} alt={name} width={182} height={182} />
        <div>{name}</div>
        <div>Цена: {price} BYN</div>
      </a>
    </Link>
  )
}

export default ProductsItem
