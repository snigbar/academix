
import React from 'react'
import Sidebar from './_components/Sidebar'
import Navbar from './_components/Navbar'




const layout = ({children}: {children:React.ReactNode}) => {
  return (
    <div className='h-full flex'>

        {/* sidebar */}
        <div className='hidden md:flex h-full w-1/4 flex-col inset-y-0 z-40'>
            <Sidebar/>
        </div>

        {/* navbar and main */}
        <div className="h-full">
        <div className='h-20 w-full md:w-3/4 fixed inset-y-0 z-30'>
        <Navbar/>
        </div>
        <main className='h-full pt-24 pl-2'>
        {children}
        </main>
        </div>
    </div>
  )
}

export default layout