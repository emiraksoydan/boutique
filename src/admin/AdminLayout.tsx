import React from 'react'
import AdminSidebar from './components/AdminSidebar'
import AdminHeaderBar from './components/AdminHeaderBar'
import { Outlet } from 'react-router'
import AdminFooterBar from './components/AdminFooterBar'
import { useData } from '../contexts/DataContext';
import Category from '../modals/CategoryModal/AddCategory'


const AdminLayout = () => {
    const data = useData();
    if (!data) { return null; }
    const { isHoverSidebar } = data;
    return (
        <div className=' d-flex admin-layout min-vh-100'>
            <div
                className="position-fixed ms-3 mt-4 mb-0 h-100 bg-white overflow-y-auto rounded-top-5"
            >
                <AdminSidebar />
            </div>
            <div className="d-flex flex-column flex-grow-1" style={{ marginLeft: isHoverSidebar ? '300px' : '150px', transition: 'all 0.25s ease-in-out', }}>
                <div className='position-sticky z-3 rounded-5 ms-1 me-3 admin-header-blur'>
                    <AdminHeaderBar />
                </div>
                <div className="bg-transparent  h-100 ms-1 me-3" >
                    <Outlet />
                </div>
                <div className='mt-auto ms-1 me-3 rounded-5'>
                    <AdminFooterBar />
                </div>
            </div>
        </div>
    )
}

export default AdminLayout