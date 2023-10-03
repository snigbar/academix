"use client"

import { cn } from "@/lib/utils";
import { Compass, Layout} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from 'react'

interface SidebarItemProps {
    icon: string;
    label: string;
    href: string;
  };
const SidebarItem = ({icon, label, href}: SidebarItemProps) => {
  const Icon = icon === "layout"? Layout : Compass;
  const pathName = usePathname()
  const router = useRouter()

  const isActive = (pathName === "/" && href === "/") || pathName === href || pathName.startsWith(`${href}/`)
  const onClick = () => {
    router.push(href)
  }
  return (
        <button
          type="button"
          className={cn(
          "flex items-center gap-x-2 py-4 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
          isActive && "text-sky-700 bg-sky-200/20 hover:text-sky-700 hover:bg-sky-200/20 border-r-4 border-sky-700"
          )}
          onClick={onClick}
          >
          <Icon size={22} className={cn("text-slate-500", isActive && "text-sky-700")}/>
          {label}
        </button>
  )
}

export default SidebarItem