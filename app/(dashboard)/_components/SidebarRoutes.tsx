
import React from 'react'
import SidebarItem from './SidebarItem'

// Convert Lucide icons to plain objects


const SidebarRoutes = () => {

  const guestRoutes = [
    {
      icon: "layout",
      label: "Dashboard",
      href: "/"
    },
    {
      icon: "compass",
      label: "Browse",
      href: "/search"
    }
  ]
  return (
    <div className="flex flex-col w-full">
    {guestRoutes.map((route) => (
      <SidebarItem
        key={route.href}
        icon={route.icon}
        label={route.label}
        href={route.href}
      />
    ))}
  </div>
  )
}

export default SidebarRoutes