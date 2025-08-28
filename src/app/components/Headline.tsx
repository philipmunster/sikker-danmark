import { LucideIcon } from "lucide-react"
import clsx from 'clsx'

type HeadlineProps = {
    color: 'blue' | 'yellow' | 'red' | 'purple'
    Icon: LucideIcon
    title: string
    children: React.ReactNode
}

export default function Headline({color = 'blue', Icon, title, children}: HeadlineProps) {

    const bgColor = {
        blue: 'blue-bg',
        yellow: 'yellow-bg',
        red: 'red-bg',
        purple: 'purple-bg',
    }

    const textColor = {
        blue: 'text-blue-900',
        yellow: 'text-yellow-900',
        red: 'text-red-900',
        purple: 'text-purple-900',
    }

    return (
        <div className={clsx(bgColor[color], 'p-4', 'rounded-md')}>
            <div className='flex items-center gap-3 mb-1'>
                <h1 className={clsx(textColor[color], 'text-lg', 'font-bold')}>{title}</h1>
                <Icon className={textColor[color]} />
            </div>
            <p className='text-sm text-gray-700'>{children}</p>
        </div>
    )
}