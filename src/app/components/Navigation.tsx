"use client"

import { BookOpen, Package, Heart, Phone } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import NavItem from '@/app/components/NavItem'

export default function Navigation() {
    const pathname = usePathname()

    const tipsActiveStyles = pathname === '/tips' ? 'bg-white shadow-md': ''
    const suppliesActiveStyles = pathname === '/supplies' ? 'bg-white shadow-md': ''
    const medicinActiveStyles = pathname === '/medicin' ? 'bg-white shadow-md': ''
    const phoneActiveStyles = pathname === '/phone' ? 'bg-white shadow-md': ''

    return (
        <nav>
            <ul className="
            flex justify-around items-center p-1
            bg-neutral-100 m-4 rounded-lg border-2 border-neutral-200
            text-xs 
            ">  
                <NavItem href='/tips' isActive={pathname === '/tips'} Icon={BookOpen} color='blue'>
                    Tips
                </NavItem>
                <NavItem href='/supplies' isActive={pathname === '/supplies'} Icon={Package} color='yellow'>
                    Forsyninger
                </NavItem>
                <NavItem href='/medicin' isActive={pathname === '/medicin'} Icon={Heart} color='red'>
                    Medicin
                </NavItem>
                <NavItem href='/phone' isActive={pathname === '/phone'} Icon={Phone} color='purple'>
                    Telefon
                </NavItem>
            </ul>
        </nav>
    )
}