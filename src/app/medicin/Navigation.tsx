"use client"

import NavItem from '@/app/components/NavItem'
import { Heart, Activity, Bandage, Thermometer, TestTubeDiagonal } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Navigation() {
    const pathname = usePathname()

    return (
        <nav>
            <ul className="
            flex justify-around items-center p-1
            bg-neutral-100 mx-4 mt-4 rounded-t-lg border-t-2 border-x-2 border-neutral-200
            text-xs 
            ">  
                <NavItem href='/medicin' isActive={pathname === '/medicin'} Icon={Activity} simpleVariant={true}>
                    Nødsituation
                </NavItem>
                <NavItem href='/medicin/injuries' isActive={pathname === '/medicin/injuries'} Icon={Bandage} simpleVariant={true}>
                    Skader
                </NavItem>
                <NavItem href='/medicin/symptoms' isActive={pathname === '/medicin/symptoms'} Icon={Thermometer} simpleVariant={true}>
                    Symptomer
                </NavItem>
                <NavItem href='/medicin/vital-signs' isActive={pathname === '/medicin/vital-signs'} Icon={TestTubeDiagonal} simpleVariant={true}>
                    Vitale tegn
                </NavItem>
            </ul>
        </nav>
    )
}