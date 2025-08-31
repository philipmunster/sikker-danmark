"use client"

import { Heart, Activity, Bandage, Thermometer } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import NavItem from '@/app/components/NavItem'

export default function MedicinPage() {
    const pathname = usePathname()

    return (
        <section>
            <nav>
                <ul className="
                flex justify-around items-center p-1
                bg-neutral-100 m-4 rounded-lg border-2 border-neutral-200
                text-xs 
                ">  
                    <NavItem href='/medicin/emergency' isActive={pathname === '/medicin/emergency'} Icon={Activity} simpleVariant={true}>
                        Nødsituation
                    </NavItem>
                    <NavItem href='/medicin/injuries' isActive={pathname === '/medicin/injuries'} Icon={Bandage} simpleVariant={true}>
                        Skader
                    </NavItem>
                    <NavItem href='/medicin/symptoms' isActive={pathname === '/medicin/symptoms'} Icon={Thermometer} simpleVariant={true}>
                        Symptomer
                    </NavItem>
                </ul>
            </nav>
        </section>
    )
}