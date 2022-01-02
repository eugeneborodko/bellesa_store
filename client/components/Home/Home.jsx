
import NavBar from '../NavBar/NavBar'
import BrandsBar from '../BrandsBar/BrandsBar'
import ProductsList from '../ProductsList/ProductsList'
import Pagination from '../Pagination/Pagination'

const Home = () => {
  return (
    <div>
      <div className="catalog">
        <NavBar />
        <div className="products">
          <BrandsBar />
          <ProductsList mainPage />
        </div>
      </div>
      <Pagination />
    </div>
  )
}

export default Home