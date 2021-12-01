import Image from 'next/image'
import cl from './ProductsItem.module.scss'

const ProductsItem = ({ product }) => {
  const { name, price, img } = product
  return (
    <div className={cl.item}>
      <Image src={img} alt={name} width={224} height={224} />
      <div>{name}</div>
      <div>Цена: {price} BYN</div>
    </div>
  )
}

export default ProductsItem
