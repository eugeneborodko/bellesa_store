import { host, authHost } from './index'
import jwtDecode from 'jwt-decode'

export const registration = async (email, password) => {
  const { data } = await host.post('api/admin/registration', {
    email,
    password,
  })
  return jwtDecode(data.token)
}

export const login = async (email, password) => {
  const { data } = await host.post('api/admin/login', { email, password })
  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}

export const check = async () => {
  const { data } = await authHost.get('api/admin/registration')
  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}
