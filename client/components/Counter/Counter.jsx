import { useEffect, memo, useContext } from 'react'
import { Context } from '../../pages/_app'
import { observer } from 'mobx-react-lite'

const Counter = observer(({ price }) => {
  const { productPrice, productCounter } = useContext(Context)

  const handleOnChange = (event) => {
    productCounter.change(event.target.value)
  }

  const handleDecrease = () => {
    if (productCounter.counter > 1) {
      productCounter.decrease()
    }
  }

  const handleIncrease = () => {
    productCounter.increase()
  }

  useEffect(() => {
    productPrice.setPrice(price * productCounter.counter)
  }, [productCounter.counter])

  return (
    <div>
      <button onClick={handleDecrease}>minus</button>
      <input type="number" value={productCounter.counter} onChange={handleOnChange} />
      <button onClick={handleIncrease}>plus</button>
    </div>
  )
})

export default memo(Counter)
