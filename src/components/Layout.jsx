import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
     <Header/>
     <main className='pt-[140px] sm:pt-[30px] lg:pt-[90px]'>
        <Outlet/>
     </main>
     <Footer/>
    </>
  )
}

export default Layout