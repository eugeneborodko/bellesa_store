import { FC } from 'react'
import { IBrands } from '../../interfaces/IBrands'

interface BrandsProps {
  brands: IBrands[]
}

const Brands: FC<BrandsProps> = ({brands}) => {
  return (
    <div>
      {brands.map(({ id, name}) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  )
}

export default Brands
