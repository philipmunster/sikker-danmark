import { emergencyData } from "@/app/data/injuries"
import { Heart, Zap, Bandage, TriangleAlert, Activity, type LucideIcon } from 'lucide-react'
import clsx from 'clsx'
import Badge from '@/app/components/Badge'

export type mapItem = {
    icon: LucideIcon
    numColor: string
    iconColor: string
}

export type map = {
    'Alvorlig blødning': mapItem,
    'Forbrænding': mapItem,
    'Brud eller forstuvning': mapItem,
    'Forgiftning': mapItem,
    'Bevidstløshed': mapItem
}

export default function InjuriesPage() {

    const iconColorMap: map = {
        'Alvorlig blødning': {
            icon: Heart,
            numColor: 'bg-red-500',
            iconColor: 'bg-red-300'
        },
        'Forbrænding': {
            icon: Zap,
            numColor: 'bg-yellow-500',
            iconColor: 'bg-yellow-300'
        },
        'Brud eller forstuvning': {
            icon: Bandage,
            numColor: 'bg-blue-500',
            iconColor: 'bg-blue-300'
        },
        'Forgiftning': {
            icon: TriangleAlert,
            numColor: 'bg-orange-500',
            iconColor: 'bg-orange-300'
        },
        'Bevidstløshed': {
            icon: Activity,
            numColor: 'bg-green-500',
            iconColor: 'bg-green-300'
        }
    }

    const emergencyDataElements = emergencyData.map((emergencyItem, index) => {

        const Icon = iconColorMap[emergencyItem.type].icon
        const numColor = iconColorMap[emergencyItem.type].numColor
        const iconColor = iconColorMap[emergencyItem.type].iconColor
        const labelColor = 
            emergencyItem.label === 'KRITISK'
            ? 'red'
            : emergencyItem.label === 'VIGTIG'
            ? 'gray'
            : 'white'

        return (
            <div key={index} className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 flex flex-col gap-4">
                {index === 0 && <p className="text-sm text-gray-600 mb-3">Dette er et overblik over hyppige skader. Følg instruktionerne nøje.</p>}
                <div className="flex items-center gap-2">
                    <div className={clsx(iconColor, 'rounded-full', 'p-2')}><Icon className='h-4 w-4'/></div>
                    <p className="font-semibold">{emergencyItem.type}</p>
                    <div className="ml-auto"><Badge color={labelColor}>{emergencyItem.label}</Badge></div>
                </div>
                {emergencyItem.steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-neutral-100 text-sm">
                        <span className={clsx(numColor, "w-6 aspect-square rounded-full text-white font-semibold flex justify-center items-center text-sm shrink-0")}>{index + 1}</span>
                        <p>{step}</p>
                    </div>
                ))}
                
            </div>
        )
    })

    return (
        <section className="mb-4 bg-neutral-100 border-x-2 border-b-2 border-neutral-200 p-4 rounded-b-lg flex flex-col gap-4">
            {emergencyDataElements}
        </section>
    )
}