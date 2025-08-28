import Link from 'next/link'
import clsx from 'clsx'
import { LucideIcon } from 'lucide-react'

type NavItemProps = {
    href: string
    isActive: boolean
    Icon: LucideIcon
    color: string
    children: React.ReactNode
}

export default function NavItem({ href, isActive, Icon, color, children }: NavItemProps) {

    const wrapperClassNames = clsx({
        'flex flex-col items-center gap-1 cursor-pointer w-1/4 py-2 rounded-lg hover:bg-white hover:shadow-md  hover:rounded-lg': true,
        'bg-white shadow-md': isActive
    })

    const iconBgClassNames = clsx({
        'rounded-full p-2': true,
        'bg-sky-200 border border-sky-300': color === 'blue',
        'bg-yellow-200 border border-yellow-300': color === 'yellow',
        'bg-red-200 border border-red-300': color === 'red',
        'bg-purple-200 border border-purple-300': color === 'purple',
    })
    
    return (
        <Link href={href} className={wrapperClassNames}>
            <div className={iconBgClassNames}><Icon className='h-4 w-4'/></div>
            <li>{children}</li>
        </Link>
    )
}