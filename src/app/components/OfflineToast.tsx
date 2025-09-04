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
            <div className='w-11/12 flex flex-col justify-center gap-1 mt-4 py-3 px-4 bg-rose-100 border-2 border-red-300 rounded-lg relative'>
                <p className='font-bold text-brand'>Dette er et udkast til en app:</p>
                <p className='text-sm text-red-700'>Når appen kommer på App Store er den beregnet til at køre i offline-tilstand. Alle kritiske informationer vil dermed være tilgængelige uden internetforbindelse.</p>
                <button className='absolute top-2 right-2 text-gray-500' onClick={handleClick}><X className='h-5 w-5'/></button>
            </div>)}
        </>
    )
}