import axios from 'axios'

export const host = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

export const authHost = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  return config
}

authHost.interceptors.request.use(authInterceptor)