import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '../../pages/_app'
import cl from './NavBar.module.scss'

const NavBar = observer(() => {
  const { product } = useContext(Context)

  const handleClick = (id) => {
    return () => {
      product.setSelectedCategory(id)
      localStorage.setItem('category', id)
    }
  }

  return (
    <ul className={cl.navbar}>
      {product.categories.map(({ id, name }) => {
        const linkClass = [cl.link]
        const isSelected =
          id === product.selectedCategory ||
          id === +localStorage.getItem('category')

        if (isSelected) {
          linkClass.push(cl.active)
        }

        return (
          <li
            className={linkClass.join(' ')}
            key={id}
            onClick={handleClick(id)}
          >
            {name}
          </li>
        )
      })}
    </ul>
  )
})

export default NavBar
