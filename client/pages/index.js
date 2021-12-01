import Layout from '../components/Layout/Layout'
import NavBar from '../components/NavBar/NavBar'
import BrandsBar from '../components/BrandsBar/BrandsBar'
import ProductsList from '../components/ProductsList/ProductsList'

const HomePage = () => {
  return (
    <Layout>
      <div className="container">
        <div className="catalog">
          <NavBar />
          <div>
            <BrandsBar />
            <ProductsList />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
