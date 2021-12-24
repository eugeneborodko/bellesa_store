import { useRouter } from 'next/router'
import { adminPanel } from '../../constants/adminPanel'

const AdminPanel = ({ handleClick }) => {
  const router = useRouter()

  return (
    <>
      <h1>Admin page</h1>
      {adminPanel.map(({ id, body, key }) => {
        return (
          <div key={id}>
            <button onClick={handleClick(key)}>{body}</button>
          </div>
        )
      })}
      <div>
        <button onClick={() => router.push('/')}>На главную</button>
      </div>
    </>
  )
}

export default AdminPanel
