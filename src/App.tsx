import { useState } from 'react'
import TopBar from './components/TopBar'
import HeaderBar from './components/HeaderBar'
import Home from './pages/Home'



function App() {

    return (
        <>
            <TopBar></TopBar>
            <HeaderBar></HeaderBar>
            <Home></Home>
        </>
    )
}

export default App
