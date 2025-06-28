
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
import AdminProduct from './admin/pages/AdminProduct'
import AdminAddProduct from './admin/pages/AdminAddProduct'
import AdminUpdateProduct from './admin/pages/AdminUpdateProduct'
import AdminSlider from './admin/pages/AdminSlider'



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
                <Route path="admin-product" element={<AdminProduct />} />
                <Route path="admin-product/add-product" element={<AdminAddProduct />} />
                <Route path="admin-product/update-product/:productID" element={<AdminUpdateProduct />} />
                <Route path="admin-slider" element={<AdminSlider />} />
            </Route>
        </Routes>
    )
}

export default App
