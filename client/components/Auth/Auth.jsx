import { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { login } from '../../http/adminAPI'
import { Context } from '../../pages/_app'

const Auth = observer(() => {
  const { admin } = useContext(Context)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleOnClick = async () => {
    try {
      const response = await login(email, password)
      admin.setAdmin(response)
      admin.setIsAuth(true)
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
    <>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChangeEmail}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={handleChangePassword}
        />
      </div>
      <button onClick={handleOnClick}>Войти</button>
    </>
  )
})

export default Auth
