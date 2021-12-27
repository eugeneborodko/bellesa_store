import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '../../pages/_app'
import cl from './NavBar.module.scss'

const NavBar = observer(() => {
  const { product } = useContext(Context)

  const handleClick = (id) => {
    product.setSelectedCategory(id)
  }

  return (
    <ul>
      {product.categories.map(({ id, name }) => {
        const linkClass = [cl.link]
        if (id === product.selectedCategory) {
          linkClass.push(cl.active)
        }

        return (
          <li
            key={id}
            className={linkClass.join(' ')}
            onClick={() => handleClick(id)}
          >
            {name}
          </li>
        )
      })}
    </ul>
  )
})

export default NavBar
