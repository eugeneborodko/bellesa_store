import { FOOTER_INFO } from '../../../../constants/footer'
import cl from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={cl.footer}>
      <div className="container">
        <div className={cl.contacts}>
          {FOOTER_INFO.map(({ id, title, text }) => (
            <div className={cl.item} key={id}>
              <h3 className={cl.title}>{title}</h3>
              <p className={cl.text}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
