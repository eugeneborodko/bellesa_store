import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../pages/_app'
import Auth from '../components/Auth/Auth'


const LoginPage = observer(() => {
  const { admin } = useContext(Context)

  return (
    <>
    {admin._isAuth ? (
      <h1>Admin page</h1>
    ): (
      <Auth />
    )}
    </> 
  )
})

export default LoginPage