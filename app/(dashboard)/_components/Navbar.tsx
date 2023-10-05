import React from 'react'
import MobileSidebar from './MobileSidebar'
import NavbarRoutes from './NavbarRoutes'


const Navbar = () => {
  return (
    <div className='p-4 border-b h-full w-full  flex items-center justify-between bg-white shadow-sm'>
        <MobileSidebar></MobileSidebar>
        <NavbarRoutes></NavbarRoutes>
    </div>
  )
}

export default Navbar