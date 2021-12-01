import Layout from '../components/Layout/Layout'
import NavBar from '../components/NavBar/NavBar'
import BrandsBar from '../components/BrandsBar/BrandsBar'

const HomePage = () => {
  return (
    <Layout>
      <div className="container">
        <div className="catalog">
          <NavBar />
          <BrandsBar />
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
