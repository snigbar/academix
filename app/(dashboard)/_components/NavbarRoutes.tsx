"use client"
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const NavbarRoutes = () => {
  const pathname = usePathname()
  const router = useRouter()

  const isTeacherPath = pathname.startsWith('/teacher')
  const isPlayerPath = pathname.includes('/chapter')

  return (
    <div className='flex items-center space-x-2 ml-auto'>
      {isPlayerPath || isTeacherPath ? 
      ( 
        <Link href="/">
        <Button variant="ghost" size="sm">
          <LogOut></LogOut>
          Exit
        </Button>
        </Link>
      )
      :
      (
        <Link href="teacher/courses">

          <Button variant="ghost" size="sm">
            Teacher Mode
          </Button>

        </Link>
      )}
        <UserButton afterSignOutUrl='/'></UserButton>
    </div>
  )
}

export default NavbarRoutes