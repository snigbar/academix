import React from 'react'
import SidebarRoutes from './SidebarRoutes'

const Sidebar = () => {
  return (
    <div className='h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm'>
        <p className='text-2xl font-bold text-indigo-800 text-center py-6'>
            Academix
        </p>
        <div className='flex flex-col w-full'>
        <SidebarRoutes/>
        </div>
    </div>
  )
}

export default Sidebar