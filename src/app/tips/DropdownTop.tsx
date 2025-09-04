import clsx from 'clsx'
import { CircleCheckBig } from 'lucide-react'
import { type Colors } from '@/app/types'

type DropdownTopProps = {
    color: keyof Colors
    title: string
    children: React.ReactNode
}

export default function DropdownTop({ color, title, children }: DropdownTopProps) {

    const MarkerTextColor: Colors = {
        blue: 'marker:text-blue-700',
        yellow: 'marker:text-yellow-700',
        red: 'marker:text-red-700',
        purple: 'marker:text-purple-700',
        green: 'marker:text-green-700',
        orange: 'marker:text-orange-700'
    }

    return (
        <div className='mb-3 md:mb-0'>
            <div className='flex gap-2 items-center'>
                <CircleCheckBig className='text-green-600 w-5 h-5'/>
                <p className='text-xs font-semibold'>{title}</p>
            </div>
            <ul className={clsx(MarkerTextColor[color], 'text-black' ,'list-disc', 'ml-6', 'mr-2', 'marker:text-lg', 'text-xs')}>
                {children}
            </ul>
        </div>
    )
}
