"use client"

import { BookOpen, Package, Heart, Phone } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
            text-sm 
            ">  
                <div className={'flex flex-col items-center gap-1 cursor-pointer w-1/4 py-2 rounded-lg hover:bg-white hover:shadow-md  hover:rounded-lg'
                    + ' ' + tipsActiveStyles
                }>
                    <div className='bg-sky-200 border border-sky-300 p-2 rounded-full'><BookOpen className='h-4 w-4'/></div>
                    <li><Link href='/tips'>Tips</Link></li>
                </div>
                <div className={'flex flex-col items-center gap-1 cursor-pointer w-1/4 py-2 rounded-lg hover:bg-white hover:shadow-md hover:rounded-lg'
                    + ' ' + suppliesActiveStyles
                }>
                    <div className='bg-lime-200 border border-lime-300 p-2 rounded-full'><Package className='h-4 w-4'/></div>
                    <li><Link href='/supplies'>Forsyning</Link></li>
                </div>
                <div className={'flex flex-col items-center gap-1 cursor-pointer w-1/4 py-2 rounded-lg hover:bg-white hover:shadow-md hover:rounded-lg'
                    + ' ' + medicinActiveStyles
                }>
                    <div className='bg-red-200 border border-red-300 p-2 rounded-full'><Heart className='h-4 w-4'/></div>
                    <li><Link href='/medicin'>Medicin</Link></li>
                </div>
                <div className={'flex flex-col items-center gap-1 cursor-pointer w-1/4 py-2 rounded-lg hover:bg-white hover:shadow-md hover:rounded-lg'
                    + ' ' + phoneActiveStyles
                }>
                    <div className='bg-purple-200 border border-purple-300 p-2 rounded-full'><Phone className='h-4 w-4'/></div>
                    <li><Link href='/phone'>Telefon</Link></li>
                </div>
            </ul>
        </nav>
    )
}