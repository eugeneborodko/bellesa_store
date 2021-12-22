import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import CreateCategory from '../components/Modals/CreateCategory'
import CreateBrand from '../components/Modals/CreateBrand'
import CreateProduct from '../components/Modals/CreateProduct'
import { observer } from 'mobx-react-lite'
import { Context } from './_app'
import { check } from '../http/adminAPI'

const Admin = observer(() => {
  const router = useRouter()
  const { admin } = useContext(Context)
  const [isCategoryVisible, setIsCategoryVisible] = useState(false)
  const [isBrandVisible, setIsBrandVisible] = useState(false)
  const [isProductVisible, setIsProductVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleCategoryClick = () => {
    setIsCategoryVisible(true)
  }

  const handleBrandClick = () => {
    setIsBrandVisible(true)
  }

  const handleProductClick = () => {
    setIsProductVisible(true)
  }

  useEffect(() => {
    check().then(data => {
      admin.setAdmin(true)
      admin.setIsAuth(true)
    }).catch(err => console.log(err)).finally(() => {
      setIsLoading(false)
    })
  }, [admin])

  if (isLoading) {
    return (
      <h1>loading...</h1>
    )
  }

  return (
    <>
      {admin.isAuth ? (
        <>
          <h1>Admin page</h1>
          <div>
            <button onClick={handleCategoryClick}>Добавить категорию</button>
          </div>
          <div>
            <button onClick={handleBrandClick}>Добавить бренд</button>
          </div>
          <div>
            <button onClick={handleProductClick}>Добавить товар</button>
          </div>
          <div>
            <button onClick={() => router.push('/')}>На главную</button>
          </div>
          <CreateCategory
            isVisible={isCategoryVisible}
            setIsVisible={setIsCategoryVisible}
          />
          <CreateBrand
            isVisible={isBrandVisible}
            setIsVisible={setIsBrandVisible}
          />
          <CreateProduct
            isVisible={isProductVisible}
            setIsVisible={setIsProductVisible}
          />
        </>
      ) : (
        <>
          <h1>Нет доступа</h1>
          <button onClick={() => router.push('/')}>На главную</button>
        </>
      )}
    </>
  )
})

export default Admin
