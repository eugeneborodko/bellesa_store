
import NavBar from '../NavBar/NavBar'
import BrandsBar from '../BrandsBar/BrandsBar'
import ProductsList from '../ProductsList/ProductsList'
import Pages from '../Pages/Pages'

const Home = () => {
  return (
    <div>
      <div className="catalog">
        <NavBar />
        <div className="products">
          <BrandsBar />
          <ProductsList />
        </div>
      </div>
      <Pages />
    </div>
  )
}

export default Home