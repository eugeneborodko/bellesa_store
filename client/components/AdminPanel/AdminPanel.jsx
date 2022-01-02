import { useRouter } from 'next/router'
import { adminPanel } from '../../constants/adminPanel'
import cl from './AdminPanel.module.scss'

const AdminPanel = ({ handleClick }) => {
  const router = useRouter()

  return (
    <div className={cl.adminPanel}>
      <h1>Страница администратора</h1>
      <div className={cl.form}>
        {adminPanel.map(({ id, body, key }) => {
          return (
            <div key={id}>
              <button className={cl.button} onClick={handleClick(key)}>
                {body}
              </button>
            </div>
          )
        })}
        <button className={cl.button} onClick={() => router.push('/')}>
          На главную
        </button>
      </div>
    </div>
  )
}

export default AdminPanel
