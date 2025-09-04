"use client"

import NavItem from '@/app/components/NavItem'
import { Phone, RadioTower} from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Navigation() {
    const pathname = usePathname()

    return (
        <nav>
            <ul className="
            flex justify-around gap-2 items-center
            bg-neutral-100 mt-4 rounded-t-lg border-t-2 border-x-2 border-neutral-200
            text-xs pt-4 px-4
            ">  
                <NavItem href='/contact' isActive={pathname === '/contact'} Icon={Phone} simpleVariant={true}>
                    Telefonnumre
                </NavItem>
                <NavItem href='/contact/radio' isActive={pathname === '/contact/radio'} Icon={RadioTower} simpleVariant={true}>
                    Radiofrekvenser
                </NavItem>
            </ul>
        </nav>
    )
}