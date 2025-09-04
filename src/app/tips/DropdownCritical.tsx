"use client"

import Badge from '@/app/components/Badge'
import { Clock, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

export default function DropdownCritical() {
    let i = 1

    const [isOpen, setIsOpen] = useState(true)

    function toggleDropdown() {
        setIsOpen(prevValue => !prevValue)
    }
 
    return (
        <div className='bg-red-50 rounded-md'>
            <div className='flex flex-col gap-4 px-4 py-3 relative'>
                {/* top */}
                <div className='flex gap-4 items-center '>
                    <div className='bg-red-100 text-red-500 p-2 rounded-full'>
                        <Clock className='w-4 h-4'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='flex items-center gap-2 '>
                            <h3 className='text-sm font-semibold text-stone-800'>Øjeblikkelige handlinger</h3>
                            <Badge color='red'>kritisk</Badge>
                        </div>
                        <p className='text-xs text-gray-600 font-semibold'>Guide for de første 24 timer</p>
                    </div>
                    <button onClick={toggleDropdown} className='absolute right-2 top-2'>
                        <ChevronDown className={`text-gray-500 h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                </div>
            </div>
            {/* fold out part */}
            <div className={`px-4 flex flex-col gap-4 overflow-hidden transition-all duration-300 ease-in-out md:flex-row md:items-strech md:flex-wrap ${
                    isOpen ? 'max-h-full opacity-100 py-3' : 'max-h-0 opacity-0'
                }`}>
                <div className='flex items-center gap-3 bg-white rounded-md px-3 py-2 md:w-[calc(50%-0.5rem)]'>
                    <p className='bg-red-100 p-2 rounded-full w-8 h-8 flex items-center justify-center text-red-600 font-bold text-xs'>{i++}</p>
                    <p className='text-sm '>Saml hele familien og bliv indendørs</p>
                </div>
                <div className='flex items-center gap-3 bg-white rounded-md px-3 py-2 md:w-[calc(50%-0.5rem)]'>
                    <p className='bg-red-100 p-2 rounded-full w-8 h-8 flex items-center justify-center text-red-600 font-bold text-xs'>{i++}</p>
                    <p className='text-sm '>Luk alle vinduer, døre og ventilation</p>
                </div>
                <div className='flex items-center gap-3 bg-white rounded-md px-3 py-2 md:w-[calc(50%-0.5rem)]'>
                    <p className='bg-red-100 p-2 rounded-full w-8 h-8 flex items-center justify-center text-red-600 font-bold text-xs'>{i++}</p>
                    <p className='text-sm '>Tænd for radio for officielle opdateringer</p>
                </div>
                <div className='flex items-center gap-3 bg-white rounded-md px-3 py-2 md:w-[calc(50%-0.5rem)]'>
                    <p className='bg-red-100 p-2 rounded-full w-8 h-8 flex items-center justify-center text-red-600 font-bold text-xs'>{i++}</p>
                    <p className='text-sm '>Tjek dine nødforsyninger (vand, mad, medicin)</p>
                </div>
                <div className='flex items-center gap-3 bg-white rounded-md px-3 py-2 md:w-[calc(50%-0.5rem)]'>
                    <p className='bg-red-100 p-2 rounded-full w-8 h-8 flex items-center justify-center text-red-600 font-bold text-xs'>{i++}</p>
                    <p className='text-sm '>Lokaliser nærmeste bunker hvis situationen forværres</p>
                </div>
                <div className='flex items-center gap-3 bg-white rounded-md px-3 py-2 md:w-[calc(50%-0.5rem)]'>
                    <p className='bg-red-100 p-2 rounded-full w-8 h-8 flex items-center justify-center text-red-600 font-bold text-xs'>{i++}</p>
                    <p className='text-sm '>Fyld tilgængelige beholdere med vand</p>
                </div>
                <div className='flex items-center gap-3 bg-white rounded-md px-3 py-2 md:w-[calc(50%-0.5rem)]'>
                    <p className='bg-red-100 p-2 rounded-full w-8 h-8 flex items-center justify-center text-red-600 font-bold text-xs'>{i++}</p>
                    <p className='text-sm '>Forbered en evakueringsplan</p>
                </div>
            </div>
        </div>
    )
}