import { useState, useEffect, useContext } from 'react'
import CreateType from '../components/Modals/CreateType'
import CreateProduct from '../components/Modals/CreateProduct'
import { createBrand, createCategory, createProduct } from '../http/productAPI'
import { observer } from 'mobx-react-lite'
import { Context } from './_app'
import { check } from '../http/adminAPI'
import AdminModal from '../components/Modals/AdminModal'
import AdminPanel from '../components/AdminPanel/AdminPanel'
import NoAccess from '../components/NoAccess/NoAccess'
import Loader from '../components/Loader/Loader'

const Admin = observer(() => {
  const { admin } = useContext(Context)

  const [brandValue, setBrandValue] = useState('')
  const [categoryValue, setCategoryValue] = useState('')

  const [productOptions, setProductOptions] = useState({
    name: '',
    price: 0,
    file: null,
    info: [],
  })

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

  useEffect(async () => {
    try {
      const adminData = await check()
      admin.setAdmin(adminData)
      admin.setIsAuth(true)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      {admin.isAuth ? (
        <>
          <AdminPanel handleClick={handleClick} />
          <AdminModal
            isVisible={isCategory}
            setIsVisible={setIsVisible}
            title="Добавить новую категорию"
            create={createCategory}
            value={categoryValue}
            setValue={setCategoryValue}
            categoryModal
          >
            <CreateType
              value={categoryValue}
              setValue={setCategoryValue}
              placeholder="категории"
            />
          </AdminModal>
          <AdminModal
            isVisible={isBrand}
            setIsVisible={setIsVisible}
            title="Добавить новый бренд"
            create={createBrand}
            value={brandValue}
            setValue={setBrandValue}
            brandModal
          >
            <CreateType
              value={brandValue}
              setValue={setBrandValue}
              placeholder="бренда"
            />
          </AdminModal>
          <AdminModal
            isVisible={isProduct}
            setIsVisible={setIsVisible}
            title="Добавить новый товар"
            create={createProduct}
            value={productOptions}
            setValue={setProductOptions}
            productModal
          >
            <CreateProduct
              value={productOptions}
              setValue={setProductOptions}
            />
          </AdminModal>
        </>
      ) : (
        <NoAccess />
      )}
    </>
  )
})

export default Admin
