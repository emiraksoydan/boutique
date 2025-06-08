
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import Product from './pages/Product'
import MainLayout from './pages/MainLayout'
import ProductDetail from './pages/ProductDetail'
import DealOfDay from './pages/DealOfDay'
import Contact from './pages/Contact'



function App() {

    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="product" element={<Product />} />
                <Route path="product-detail" element={<ProductDetail />} />
                <Route path="deal-of-day" element={<DealOfDay />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
    )
}

export default App
