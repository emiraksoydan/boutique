
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import Product from './pages/Product'
import MainLayout from './pages/MainLayout'
import ProductDetail from './pages/ProductDetail'
import DealOfDay from './pages/DealOfDay'
import Contact from './pages/Contact'
import ShoppingCard from './pages/ShoppingCard'
import AdminLayout from './admin/AdminLayout'
import AdminDashboard from './admin/pages/AdminDashboard'
import AdminCategory from './admin/pages/AdminCategory'



function App() {

    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="product" element={<Product />} />
                <Route path="product-detail" element={<ProductDetail />} />
                <Route path="deal-of-day" element={<DealOfDay />} />
                <Route path="contact" element={<Contact />} />
                <Route path="shopping-card" element={<ShoppingCard />} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="admin-category" element={<AdminCategory />} />
            </Route>
        </Routes>
    )
}

export default App
