import { emergencyData, type emergencyDataItem } from "@/app/data/injuries"
import { Heart, Zap, Bandage, TriangleAlert, Activity, type LucideIcon } from 'lucide-react'
import clsx from 'clsx'
import Badge from '@/app/components/Badge'

type mapItem = {
    icon: LucideIcon
    numColor: string
    iconColor: string
}

type map = {
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
            numColor: 'bg-red-100',
            iconColor: 'bg-red-300'
        },
        'Forbrænding': {
            icon: Zap,
            numColor: 'bg-yellow-100',
            iconColor: 'bg-yellow-300'
        },
        'Brud eller forstuvning': {
            icon: Bandage,
            numColor: 'bg-blue-100',
            iconColor: 'bg-blue-300'
        },
        'Forgiftning': {
            icon: TriangleAlert,
            numColor: 'bg-orange-100',
            iconColor: 'bg-orange-300'
        },
        'Bevidstløshed': {
            icon: Activity,
            numColor: 'bg-green-100',
            iconColor: 'bg-green-300'
        }
    }

    const emergencyDataElements = emergencyData.map(emergencyItem => {
        const Icon = iconColorMap[emergencyItem.type].icon
        const numColor = iconColorMap[emergencyItem.type].numColor
        const iconColor = iconColorMap[emergencyItem.type].iconColor

        return (
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                    <div className={clsx(iconColor, 'rounded-full', 'p-2')}><Icon className='h-4 w-4'/></div>
                    <p className="font-semibold">{emergencyItem.type}</p>
                    <div className="ml-auto"><Badge color="gray">KRITISK</Badge></div>
                    
                </div>
            </div>
        )
    })

    return (
        <section className="mx-4 mb-4 bg-neutral-100 border-x-2 border-b-2 border-neutral-200 p-4 rounded-b-lg flex flex-col gap-4">
            {emergencyDataElements}
        </section>
    )
}