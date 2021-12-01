import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '../../pages/_app'
import cl from './NavBar.module.scss'

const NavBar = observer(() => {
  const { product } = useContext(Context)

  const handleClick = (name) => {
    product.setSelectedCategory(name)
  }

  return (
    <ul>
      {product.categories.map(({ id, name }) => {
        const linkClass = [cl.link]
        if (name === product.selectedCategory) {
          linkClass.push(cl.active)
        }

        return (
          <li key={id}>
            <a
              className={linkClass.join(' ')}
              href="#"
              onClick={() => handleClick(name)}
            >
              {name}
            </a>
          </li>
        )
      })}
    </ul>
  )
})

export default NavBar
