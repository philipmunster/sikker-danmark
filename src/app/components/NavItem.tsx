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
        'blue-bg': color === 'blue',
        'yellow-bg': color === 'yellow',
        'red-bg': color === 'red',
        'purple-bg': color === 'purple',
    })
    
    return (
        <Link href={href} className={wrapperClassNames}>
            <div className={iconBgClassNames}><Icon className='h-4 w-4'/></div>
            <li>{children}</li>
        </Link>
    )
}