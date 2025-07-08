import './App.css'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import { Outlet } from 'react-router-dom'
import useScrollToTop from './hooks/useScrollToTop'

function App() {
  useScrollToTop();

  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  )
}

export default App
