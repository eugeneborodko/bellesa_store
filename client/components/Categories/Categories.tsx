import { FC } from 'react'
import { ICategories } from '../../interfaces/ICategories'

interface CategoriesProps {
  categories: ICategories[]
}

const Categories: FC<CategoriesProps> = ({categories}) => {
  return (
    <div>
      {categories.map(({ id, name}) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  )
}

export default Categories
