'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

interface NavItemProps{
    icon:ReactNode
    path:string
}

export const NavItem =({icon,path}:NavItemProps)=>{

    const pathName = usePathname()

    return(
        <Link href={path} className="w-full flex justify-center" >
            <span className={pathName === path ? "bg-red-500 rounded-md transition-all w-10/12 flex justify-center":"transition-all w-10/12 py-2"}>
                {icon}
            </span>
            
        </Link>
        
    )
}

