import React from 'react'
// import Header from './component/Header/Header'
// import Footer from './component/Footer/Footer'
import {Header,Footer} from './component'
import {Outlet} from 'react-router-dom'
function Layout() {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        
        </>
    )
}

export default Layout
