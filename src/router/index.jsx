import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Logement from '../pages/Logement'
import Error from '../pages/Error'
import Layout from '../components/Layout'

function Router() {
  return (
  <BrowserRouter>
  <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
  </Layout>
  </BrowserRouter>
)
}
export default Router