
import React from 'react'
import Sidebar from './_components/Sidebar'
import Navbar from './_components/Navbar'




const layout = ({children}: {children:React.ReactNode}) => {
  return (
    <div className='h-full flex'>

        {/* sidebar */}
        <div className='hidden md:flex h-full basis-[22%] lg:basis-[18%] flex-col inset-y-0 z-30'>
            <Sidebar/>
        </div>
        
        {/* navbar and main */}
        <div className="h-full">
        <div className='w-full h-20 fixed inset-y-0 z-30'>
        <Navbar/>
        </div>
        <main className='h-full'>
        {children}
        </main>
        </div>
    </div>
  )
}

export default layout