import { useState, useEffect, memo, useContext } from 'react'
import { Context } from '../../pages/_app'

const Counter = ({ price }) => {
  const { productPrice } = useContext(Context)
  const [counter, setCounter] = useState(1)

  const handleOnChange = (event) => {
    setCounter(event.target.value)
  }

  const handleDecrease = () => {
    if (counter > 1) {
      setCounter((prev) => prev - 1)
    }
  }

  const handleIncrease = () => {
    setCounter((prev) => prev + 1)
  }

  useEffect(() => {
    productPrice.setPrice(price * counter)
  }, [counter])

  return (
    <div>
      <button onClick={handleDecrease}>minus</button>
      <input type="number" value={counter} onChange={handleOnChange} />
      <button onClick={handleIncrease}>plus</button>
    </div>
  )
}

export default memo(Counter)
