import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
