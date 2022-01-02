import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { observer } from 'mobx-react-lite'
import { login } from '../../http/adminAPI'
import { Context } from '../../pages/_app'
import cl from './Auth.module.scss'

const Auth = observer(() => {
  const { admin } = useContext(Context)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleOnClick = async () => {
    try {
      const response = await login(email, password)
      admin.setAdmin(response)
      admin.setIsAuth(true)
      router.push('/admin')
    } catch (err) {
      alert(err)
    }
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div className={cl.auth}>
    <h1>Войти как администратор</h1>
    <form onSubmit={(e) => e.preventDefault()} className={cl.form}>
      <div>
        <input
          className={cl.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChangeEmail}
        />
      </div>
      <div>
        <input
          className={cl.input}
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={handleChangePassword}
        />
      </div>
      <button className={cl.button} onClick={handleOnClick}>Войти</button>
    </form>
    </div>
  )
})

export default Auth
