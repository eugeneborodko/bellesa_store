import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '../../pages/_app'
import cl from './Pages.module.scss'

const Pages = observer(() => {
  const { product } = useContext(Context)
  const pagesCount = Math.ceil(product.totalCount / product.limit) + 1
  const pages = []

  for (let i = 0; i < pagesCount; i++) {
    pages.push(i + 1)
  }

  const handleSetPage = (page) => {
    product.setPage(page)
  }

  return (
    <div>
      {pages.map((page) => {
        const paginationItemClass = [cl.paginationItem]

        if (product.page === page) {
          paginationItemClass.push(cl.active)
        }

        return (
          <div
            className={paginationItemClass.join(' ')}
            key={page}
            onClick={() => handleSetPage(page)}
          >
            {page}
          </div>
        )
      })}
    </div>
  )
})

export default Pages
