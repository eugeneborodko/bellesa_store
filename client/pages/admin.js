import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import CreateCategory from '../components/Modals/CreateCategory'
import CreateBrand from '../components/Modals/CreateBrand'
import CreateProduct from '../components/Modals/CreateProduct'
import { createBrand, createCategory } from '../http/productAPI'
import { observer } from 'mobx-react-lite'
import { Context } from './_app'
import { check } from '../http/adminAPI'
import AdminModal from '../components/Modals/AdminModal'

const Admin = observer(() => {
  const router = useRouter()
  const { admin } = useContext(Context)

  const [brandValue, setBrandValue] = useState('')
  const [categoryValue, setCategoryValue] = useState('')

  // const [isProductVisible, setIsProductVisible] = useState(false)

  const [isVisible, setIsVisible] = useState({
    isCategory: false,
    isBrand: false,
    isProduct: false,
  })
  const [isLoading, setIsLoading] = useState(true)

  const { isCategory, isBrand, isProduct } = isVisible

  const handleClick = (key) => {
    return () => {
      setIsVisible({ ...isVisible, [key]: true })
    }
  }

  useEffect(() => {
    check()
      .then((data) => {
        admin.setAdmin(true)
        admin.setIsAuth(true)
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false)
      })
  }, [admin])

  if (isLoading) {
    return <h1>loading...</h1>
  }

  return (
    <>
      {admin.isAuth ? (
        <>
          <h1>Admin page</h1>
          <div>
            <button onClick={handleClick('isCategory')}>
              Добавить категорию
            </button>
          </div>
          <div>
            <button onClick={handleClick('isBrand')}>Добавить бренд</button>
          </div>
          {/* <div>
            <button onClick={handleProductClick}>Добавить товар</button>
          </div> */}
          <div>
            <button onClick={() => router.push('/')}>На главную</button>
          </div>
          {/* <CreateProduct
            isVisible={isProductVisible}
            setIsVisible={setIsProductVisible}
          /> */}
          <AdminModal
            isVisible={isCategory}
            setIsVisible={setIsVisible}
            title="category modal"
            create={createCategory}
            value={categoryValue}
            setValue={setCategoryValue}
          >
            <CreateCategory value={categoryValue} setValue={setCategoryValue} />
          </AdminModal>

          <AdminModal
            isVisible={isBrand}
            setIsVisible={setIsVisible}
            title="brand modal"
            create={createBrand}
            value={brandValue}
            setValue={setBrandValue}
          >
            <CreateBrand value={brandValue} setValue={setBrandValue} />
          </AdminModal>
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
