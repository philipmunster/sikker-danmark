"use client"

import { BookOpen, Package, Heart, Phone } from 'lucide-react'
import { usePathname } from 'next/navigation'
import NavItem from '@/app/components/NavItem'

export default function Navigation() {
    const pathname = usePathname()

    return (
        <nav className='w-11/12'>
            <ul className="
            flex justify-around items-center p-1
            bg-neutral-100 my-4 rounded-lg border-2 border-neutral-200
            text-xs 
            ">  
                <NavItem href='/supplies' isActive={pathname === '/supplies'} Icon={Package} color='yellow'>
                    Forsyninger
                </NavItem>
                <NavItem href='/tips' isActive={pathname === '/tips'} Icon={BookOpen} color='blue'>
                    Tips
                </NavItem>
                <NavItem href='/medicin' isActive={pathname.startsWith('/medicin')} Icon={Heart} color='red'>
                    Førstehjælp
                </NavItem>
                <NavItem href='/contact' isActive={pathname.startsWith('/contact')} Icon={Phone} color='purple'>
                    Kontakt
                </NavItem>
            </ul>
        </nav>
    )
}