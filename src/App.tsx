
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import Product from './pages/Product'
import MainLayout from './pages/MainLayout'



function App() {

    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="product" element={<Product />} />
            </Route>
        </Routes>
    )
}

export default App
