"use client"

import Badge from '@/app/components/Badge'
import { ChevronDown, Droplets, Target, House, Users, Zap, type LucideIcon } from 'lucide-react'
import { useState } from 'react'
import clsx from 'clsx'
import { type Colors } from '@/app/types'

type DropdownProps = {
    colorVariant: keyof Colors
    iconName: keyof IconsObj
    title: string
    subTitle: string
    badgeColor: string
    badgeText: string
    children: React.ReactNode
}

type IconsObj = {
    'Droplets': LucideIcon
    'Target': LucideIcon
    'House': LucideIcon
    'Users': LucideIcon
    'Zap': LucideIcon
}

export default function Dropdown({ colorVariant, iconName, title, subTitle, badgeColor, badgeText, children }: DropdownProps) {
    let i = 1

    const [isOpen, setIsOpen] = useState(false)

    function toggleDropdown() {
        setIsOpen(prevValue => !prevValue)
    }

    const IconsObj: IconsObj = { 
        'Droplets': Droplets,
        'Target': Target,
        'House': House,
        'Users': Users,
        'Zap': Zap,
    }

    const Icon = IconsObj[iconName]

    const bgColor: Colors = {
        blue: 'bg-blue-100',
        yellow: 'bg-yellow-100',
        red: 'bg-red-100',
        purple: 'bg-purple-100',
        green: 'bg-green-100',
        orange: 'bg-orange-100'
    }

    const textColor: Colors = {
        blue: 'text-blue-700',
        yellow: 'text-yellow-700',
        red: 'text-red-700',
        purple: 'text-purple-700',
        green: 'text-green-700',
        orange: 'text-orange-700'
    }

    return (
        <div className='border border-stone-200 rounded-md md:w-[calc(50%-0.5rem)]'>
            {/* top */}
            <div className='flex flex-col gap-4 rounded-md px-4 py-3 relative'>
                <div className='flex gap-4 items-center '>
                    <div className={clsx(bgColor[colorVariant], textColor[colorVariant], 'p-2', 'rounded-full')}>
                        <Icon className='w-4 h-4' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='flex items-center gap-2 '>
                            <h3 className='text-sm font-semibold text-stone-800'>{title}</h3>
                            <Badge color={badgeColor}>{badgeText}</Badge>
                        </div>
                        <p className='text-xs text-gray-600 font-semibold'>{subTitle}</p>
                    </div>
                    <button onClick={toggleDropdown} className='absolute right-2 top-2'>
                        <ChevronDown className={`text-gray-500 h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                </div>
            </div>

            {/* fold out part */}
            <div className={`px-4 flex flex-col gap-3 overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-full opacity-100 py-3' : 'max-h-0 opacity-0'
                }`}>

                {children}

            </div>
        </div>
    )
}