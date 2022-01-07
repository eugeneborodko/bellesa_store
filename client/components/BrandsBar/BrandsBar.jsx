import { observer } from 'mobx-react-lite'
import { useContext, useState } from 'react'
import { Context } from '../../pages/_app'
import BrandItem from './components/BrandItem/BrandItem'
import cl from './BrandsBar.module.scss'

const BrandsBar = observer(() => {
  const { product } = useContext(Context)

  const [result, setResult] = useState([])

  return (
    <div className={cl.brandsList}>
      {product.brands.map(({ id, name }) => (
        <BrandItem id={id} name={name} result={result} setResult={setResult} />
      ))}
    </div>
  )
})

export default BrandsBar
