import clsx from 'clsx'

export default function ProgressBar({ value = 0 }) {
    const roundedValue = value === 1 ? 'rounded-full' : 'rounded-l-full' 

    return (
        <div className="bg-gray-300 w-full h-2 rounded-full">
            <div 
                className={clsx('bg-stone-800', 'h-2', roundedValue)}
                style={{
                    width: `${value * 100}%`
                }}
            >
            </div>
        </div>
    )
}