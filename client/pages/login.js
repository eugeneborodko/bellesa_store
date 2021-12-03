import { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../pages/_app'
import Auth from '../components/Auth/Auth'
import CreateCategory from '../components/Modals/CreateCategory'
import CreateBrand from '../components/Modals/CreateBrand'
import CreateProduct from '../components/Modals/CreateProduct'

const LoginPage = observer(() => {
  const { admin } = useContext(Context)
  const [isCategoryVisible, setIsCategoryVisible] = useState(false)
  const [isBrandVisible, setIsBrandVisible] = useState(false)
  const [isProductVisible, setIsProductVisible] = useState(false)

  const handleCategoryClick = () => {
    setIsCategoryVisible(true)
  }

  const handleBrandClick = () => {
    setIsBrandVisible(true)
  }

  const handleProductClick = () => {
    setIsProductVisible(true)
  }

  return (
    <>
      {admin._isAuth ? (
        <>
          <div>
            <button onClick={handleCategoryClick}>Добавить категорию</button>
          </div>
          <div>
            <button onClick={handleBrandClick}>Добавить бренд</button>
          </div>
          <div>
            <button onClick={handleProductClick}>Добавить товар</button>
          </div>
          <CreateCategory isVisible={isCategoryVisible} setIsVisible={setIsCategoryVisible} />
          <CreateBrand isVisible={isBrandVisible} setIsVisible={setIsBrandVisible} />
          <CreateProduct isVisible={isProductVisible} setIsVisible={setIsProductVisible} />
        </>
      ) : (
        <Auth />
      )}
    </>
  )
})

export default LoginPage
