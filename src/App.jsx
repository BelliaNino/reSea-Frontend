import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate
} from 'react-router-dom'

import Structure from './Layout/Structure'
import Homepage from './pages/Hompage'
import ProductDetail from './pages/ProductDetail'
import NotFound from './pages/NotFound'
import Wishlist from './pages/Wishlist'
import Product from './pages/Product'

import { CategoriesProvider } from './Context/CategoriesContext'


function App() {


  return (
    <>
      <CategoriesProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Structure />}>
              <Route index element={<Navigate to='/homepage' replace />} />
              <Route path='/homepage' element={<Homepage />} />
              <Route path='/products' element={<Product />} />
              <Route path='/products/:slug' element={<ProductDetail />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CategoriesProvider>
    </>
  )
}

export default App

