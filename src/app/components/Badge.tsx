import clsx from "clsx"

type BadgeProps = {
    color: string
    children: string
}

export default function Badge({ color, children }: BadgeProps) {

    const classNames = clsx({
        'rounded-xl text-xs py-1 px-2 text-white font-semibold': true,
        'bg-blue-700': color === 'blue',
        'bg-yellow-700': color === 'yellow',
        'bg-brand': color === 'red',
        'bg-purple-700': color === 'purple',
    })

    return (
        <span className={classNames}>
            {children.toUpperCase()}
        </span>
    )
}