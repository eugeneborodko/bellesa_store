import { useEffect, memo, useContext, useState } from 'react'
import { Context } from '../../pages/_app'
import { observer } from 'mobx-react-lite'
import cl from './Counter.module.scss'

const Counter = observer(({ price, isVisible }) => {
  const { productPrice, productCounter } = useContext(Context)
  const [value, setValue] = useState(1)

  const counterClass = [cl.counter]

  if (isVisible) {
    counterClass.push(cl.visible)
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
    setValue(productCounter.counter)
  }, [productCounter.counter])

  return (
    <>
      <div className={counterClass.join(' ')}>
      <h3 className={cl.amount}>Количество: </h3>
        <button className={cl.button} title="удалить" onClick={handleDecrease}>
          &ndash;
        </button>
        <span className={cl.value}>{value}</span>
        <button className={cl.button} title="добавить" onClick={handleIncrease}>
          &#43;
        </button>
      </div>
    </>
  )
})

export default memo(Counter)
