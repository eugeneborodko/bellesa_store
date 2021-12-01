import Link from 'next/link'
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
            <Link href="#">
              <a
                className={linkClass.join(' ')}
                onClick={() => handleClick(name)}
              >
                {name}
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
})

export default NavBar
