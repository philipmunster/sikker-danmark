import { LucideIcon } from "lucide-react"
import clsx from 'clsx'

type HeadlineProps = {
    color: 'blue' | 'yellow' | 'red' | 'purple'
    Icon: LucideIcon
    title: string
    children: React.ReactNode
}

export default function Headline({color = 'blue', Icon, title, children}: HeadlineProps) {

    const textColor = {
        blue: 'text-blue-800',
        yellow: 'text-yellow-700',
        red: 'text-red-700',
        purple: 'text-purple-700',
    }

    return (
        <div className='text-center py-4 px-2'>
            <div className='flex items-center justify-center gap-3 mb-1'>
                <h1 className={clsx(textColor[color], 'text-2xl', 'font-bold')}>{title}</h1>
                <Icon className={textColor[color]} />
            </div>
            <p className='text-sm text-gray-700 leading-relaxed'>{children}</p>
        </div>
    )
}