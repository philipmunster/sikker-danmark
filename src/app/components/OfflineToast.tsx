"use client"

import { useState } from 'react'
import { X } from 'lucide-react'

export default function OfflineToast() {
    const [isOpen, setIsOpen] = useState(true)

    function handleClick() {
        setIsOpen(false)
    }

    return (
        <>
        {isOpen && (
            <div className='flex flex-col justify-center gap-1 mt-4 mx-4 py-3 px-4 bg-rose-100 border-2 border-red-300 rounded-lg relative'>
                <p className='font-bold text-brand'>Brug i krisesituation:</p>
                <p className='text-sm text-red-700'>Appen kører i offline-tilstand. Alle kritiske informationer er tilgængelige uden internetforbindelse.</p>
                <button className='absolute top-2 right-2 text-gray-500' onClick={handleClick}><X className='h-5 w-5'/></button>
            </div>)}
        </>
    )
}