"use client"

import NavItem from '@/app/components/NavItem'
import { Phone, RadioTower, AlarmClock } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Navigation() {
    const pathname = usePathname()

    return (
        <nav>
            <ul className="
            flex justify-around items-center
            bg-neutral-100 mx-4 mt-4 rounded-t-lg border-t-2 border-x-2 border-neutral-200
            text-xs p-2
            ">  
                <NavItem href='/phone' isActive={pathname === '/phone'} Icon={Phone} simpleVariant={true}>
                    Telefonnumre
                </NavItem>
                <NavItem href='/phone/radio' isActive={pathname === '/phone/radio'} Icon={RadioTower} simpleVariant={true}>
                    Radiofrekvenser
                </NavItem>
            </ul>
        </nav>
    )
}