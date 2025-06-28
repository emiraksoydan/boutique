import React, { useState } from 'react'
import { useData } from '../../contexts/DataContext';
import { Divider } from '@mui/material';
import { IoMdHome } from "react-icons/io";
import { BiSolidCategory, BiChevronDown } from "react-icons/bi";
import { Link, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import { FaTshirt } from "react-icons/fa";

const AdminSidebar = () => {
    const data = useData();
    if (!data) { return null; }
    const { isHoverSidebar, setIsHoverSidebar } = data;
    const location = useLocation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = (e: any) => {
        e.preventDefault();
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div
            onMouseEnter={() => setIsHoverSidebar && setIsHoverSidebar(true)}
            onMouseLeave={() => setIsHoverSidebar && setIsHoverSidebar(false)}
            className='  d-flex flex-column h-100 py-4'
            style={{
                width: isHoverSidebar ? '285px' : '120px',
                minWidth: isHoverSidebar ? '285px' : '120px',
                transition: 'all 0.25s ease-in-out',
            }}
        >
            <h4 style={{ fontFamily: 'inherit' }} className='text-center'>{!isHoverSidebar ? "B" : 'BOUTIQUE'}</h4>
            <Divider sx={{ borderBottom: '1px solid rgb(117, 118, 119)' }} className='mt-3 w-100'></Divider>
            <div className={`d-flex justify-content-center mt-4 ${!isHoverSidebar ? 'me-0' : 'me-3'} `}>
                <ul className=' align-items-start list-unstyled'>
                    <Link to={"/admin"} className={`d-flex align-items-center ${!isHoverSidebar ? 'justify-content-center' : ''}   gap-3  py-2 text-decoration-none ${location.pathname === '/admin' ? 'text-black' : 'text-body-tertiary'}`}>
                        <IoMdHome color='#6bbeb7' size={20}></IoMdHome>
                        {isHoverSidebar && (
                            <span className="fade-text">Anasayfa</span>
                        )}
                    </Link>
                    <Link to={"/admin/admin-category"} className={`d-flex align-items-center ${!isHoverSidebar ? 'justify-content-center' : 'justify-content-between'}  gap-3 py-2 text-decoration-none ${location.pathname.includes("admin-category") ? 'text-black' : 'text-body-tertiary'}`}>
                        <BiSolidCategory color='#6bbeb7' size={20}></BiSolidCategory>
                        {isHoverSidebar && (
                            <>
                                <span className="fade-text">Kategoriler</span>
                                <div
                                    onClick={toggleDropdown}
                                    className={`dropdown-icon d-flex align-items-center mt-1 ${isDropdownOpen ? 'rotate' : ''}`}
                                >
                                    <BiChevronDown size={18} />
                                </div>
                            </>

                        )}
                    </Link>
                    <div
                        className={`dropdown-content ${isDropdownOpen && isHoverSidebar ? 'open' : ''}`}
                        style={{ marginLeft: '35px' }}
                    >
                        <Link
                            to="/admin/admin-slider/"
                            className={`text-decoration-none fw-medium ${location.pathname.includes("admin-slider") ? 'text-black' : 'text-body-tertiary'
                                }`}
                            style={{ fontSize: 'smaller' }}
                        >
                            Slider
                        </Link>
                    </div>
                    <Link to={"/admin/admin-product"} className={`d-flex align-items-center ${!isHoverSidebar ? 'justify-content-center' : ''}  gap-3 py-2 text-decoration-none ${location.pathname.includes("admin-product") ? 'text-black' : 'text-body-tertiary'}`}>
                        <FaTshirt color='#6bbeb7' size={20}></FaTshirt>
                        {isHoverSidebar && (<span className="fade-text">Ürünler</span>)}
                    </Link>
                </ul>
            </div>
        </div >
    )
}

export default AdminSidebar