import React from 'react'
import TopBar from '../components/TopBar';
import HeaderBar from '../components/HeaderBar';
import { Outlet } from 'react-router';
import FooterBar from '../components/FooterBar';

const MainLayout = () => {
    return (
        <>
            <TopBar />
            <HeaderBar />
            <Outlet />
            <FooterBar />
        </>
    );
}

export default MainLayout