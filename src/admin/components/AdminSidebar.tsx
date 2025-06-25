import React, { useState } from 'react'
import { useData } from '../../contexts/DataContext';
import { Divider } from '@mui/material';
import { IoMdHome } from "react-icons/io";
import { BiSolidCategory } from "react-icons/bi";
import { Link, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';

const AdminSidebar = () => {
    const data = useData();
    if (!data) { return null; }
    const { isHoverSidebar, setIsHoverSidebar } = data;
    const location = useLocation();
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
                        <AnimatePresence>
                            {isHoverSidebar && (
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    Anasayfa
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </Link>
                    <Link to={"/admin/admin-category"} className={`d-flex align-items-center ${!isHoverSidebar ? 'justify-content-center' : ''}  gap-3 py-2 text-decoration-none ${location.pathname.includes("admin-category") ? 'text-black' : 'text-body-tertiary'}`}>
                        <BiSolidCategory color='#6bbeb7' size={20}></BiSolidCategory>
                        <AnimatePresence>
                            {isHoverSidebar && (
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    Kategoriler
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </Link>
                </ul>
            </div>
        </div >
    )
}

export default AdminSidebar