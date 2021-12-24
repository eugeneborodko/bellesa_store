import { useRouter } from 'next/router'

const NoAccess = () => {
  const router = useRouter()
  
  return (
    <>
      <h1>Нет доступа</h1>
      <button onClick={() => router.push('/')}>На главную</button>
    </>
  )
}

export default NoAccess
