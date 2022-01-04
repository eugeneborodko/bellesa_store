import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '../../pages/_app'
import cl from './Pagination.module.scss'

const Pagination = observer(() => {
  const { product } = useContext(Context)
  const pagesCount = Math.ceil(product.totalCount / product.limit)
  const pages = []

  for (let i = 0; i < pagesCount; i++) {
    pages.push(i + 1)
  }

  const handleSetPage = (page) => {
    return () => {
      product.setPage(page)
    }
  }

  return (
    <div className="container">
      {!!product.products.length && (
        <div className={cl.pagination}>
          {pages.map((page) => {
            const paginationItemClass = [cl.item]

            if (product.page === page) {
              paginationItemClass.push(cl.active)
            }

            return (
              <div
                className={paginationItemClass.join(' ')}
                title={`Страница номер ${page}`}
                key={page}
                onClick={handleSetPage(page)}
              >
                {page}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
})

export default Pagination
