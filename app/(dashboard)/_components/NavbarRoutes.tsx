"use client"
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const NavbarRoutes = () => {
  return (
    <div className='flex space-x-2 lg:ml-auto'>
        <UserButton></UserButton>
    </div>
  )
}

export default NavbarRoutes