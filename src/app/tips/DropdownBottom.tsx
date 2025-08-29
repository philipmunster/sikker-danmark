import clsx from 'clsx'
import { Info } from 'lucide-react'
import { type Colors } from '@/app/types'

type DropdownTopProps = {
    color: keyof Colors
    title: string
    subTitle?: string
    children: React.ReactNode
}
export default function DropdownBottom({ color, title, subTitle = '', children }: DropdownTopProps) {

    const textColor: Colors = {
        blue: 'text-blue-700',
        yellow: 'text-yellow-700',
        red: 'text-red-700',
        purple: 'text-purple-700',
        green: 'text-green-700',
        orange: 'text-orange-700'
    }
 
    const MarkerTextColor: Colors = {
        blue: 'marker:text-blue-800',
        yellow: 'marker:text-yellow-800',
        red: 'marker:text-red-800',
        purple: 'marker:text-purple-800',
        green: 'marker:text-green-800',
        orange: 'marker:text-orange-800'
    }
 
    const borderColor: Colors = {
        blue: 'border-blue-600',
        yellow: 'border-yellow-600',
        red: 'border-red-600',
        purple: 'border-purple-600',
        green: 'border-green-600',
        orange: 'border-orange-600'
    }

    const bgColor: Colors = {
        blue: 'bg-blue-100',
        yellow: 'bg-yellow-100',
        red: 'bg-red-100',
        purple: 'bg-purple-100',
        green: 'bg-green-100',
        orange: 'bg-orange-100'
    }

    return (
        <div className='mt-3 flex flex-col gap-3'>
            <div className='flex gap-2 items-center'>
                <Info className={clsx(textColor[color], 'w-5', 'h-5')}/>
                <p className='text-xs font-semibold'>{title}</p>
            </div>
            <div className={clsx(borderColor[color], bgColor[color], 'p-3', 'rounded-lg', 'border')}>
                {subTitle && <p className={clsx(textColor[color], 'text-xs', 'font-bold')}>{subTitle}</p>}
                <ul className={clsx(MarkerTextColor[color], 'list-disc', 'marker:text-lg', 'text-xs', 'ml-5')}>
                    {children}
                </ul>
            </div>
        </div>
    )
}

