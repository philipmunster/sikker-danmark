import clsx from "clsx"

type BadgeProps = {
    color: string
    children: string
}

export default function Badge({ color = 'gray', children }: BadgeProps) {

    const classNames = clsx({
        'rounded-xl text-[9px] py-1 px-2 font-semibold tracking-wider': true,
        'bg-blue-700 text-white': color === 'blue',
        'bg-yellow-700 text-white': color === 'yellow',
        'bg-brand text-white': color === 'red',
        'bg-purple-700 text-white': color === 'purple',
        'bg-gray-200 text-black': color === 'gray',
        'bg-white text-black border border-gray-200': color === 'white'
    })

    return (
        <span className={classNames}>
            {children.toUpperCase()}
        </span>
    )
}