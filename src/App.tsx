import { useState } from 'react'
import TopBar from './components/TopBar'
import HeaderBar from './components/HeaderBar'
import Home from './pages/Home'
import FooterBar from './components/FooterBar'



function App() {

    return (
        <>
            <TopBar></TopBar>
            <HeaderBar></HeaderBar>
            <Home></Home>
            <FooterBar></FooterBar>
        </>
    )
}

export default App
