import Contacts from './components/Contacts/Contacts'
import Logo from './components/Logo/Logo'
import cl from './Header.module.scss'

const Header = () => {
  return (
    <header>
      <div className={cl.inner}>
        <div className="container">
          <Contacts />
        </div>
      </div>
      <Logo />
    </header>
  )
}

export default Header
