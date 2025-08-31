"use client"

import { Droplets, Bandage, Radio, Hammer, Bubbles, IdCard, type LucideIcon } from 'lucide-react'
import ProgressBar from '@/app/components/ProgressBar'
import Badge from '@/app/components/Badge'
import { useState } from 'react'
import clsx from 'clsx'
import { type CategoryDataType } from '@/app/data/supplies'

type ChecklistCardProps = {
    categoryObj: CategoryDataType
    toggleTotalChecked: (checked: boolean, label: 'KRITISK' | 'VIGTIG' | 'NYTTIG') => void
}


export default function ChecklistCard({ categoryObj, toggleTotalChecked }: ChecklistCardProps) {

    const [checkedCount, setCheckedCount] = useState({
        'nonCritical': 0,
        'critical': 0
    })

    const nonCriticalCount = checkedCount['nonCritical']
    const criticalCount = checkedCount['critical']
    const elementCount = categoryObj.data.length
    const fractionDone = (nonCriticalCount + criticalCount) / elementCount

    function toggleChecked(checked: boolean, label: 'KRITISK' | 'VIGTIG' | 'NYTTIG'): void {
        const key = label === 'KRITISK' ? 'critical' : 'nonCritical'
        const change = checked ? 1 : -1

        setCheckedCount(prev => ({
            ...prev,
            [key]: prev[key] + change
        }))

        toggleTotalChecked(checked, label)
    }

    const iconMapObj: {
        'Vand & Mad': LucideIcon,
        'Medicin': LucideIcon, 
        'Kommunikation': LucideIcon, 
        'Værktøj': LucideIcon, 
        'Hygiejne': LucideIcon, 
        'Dokumenter': LucideIcon   
    } = {
        'Vand & Mad': Droplets,
        'Medicin': Bandage, 
        'Kommunikation': Radio, 
        'Værktøj': Hammer, 
        'Hygiejne': Bubbles, 
        'Dokumenter': IdCard
    }
    
    const Icon: LucideIcon = iconMapObj[categoryObj.type as keyof typeof iconMapObj]

    const colorMapObj = {
        'Vand & Mad': 'bg-blue-200 text-blue-600 rounded-full p-2',
        'Medicin': 'bg-red-200 text-red-600 rounded-full p-2', 
        'Kommunikation': 'bg-purple-200 text-purple-600 rounded-full p-2', 
        'Værktøj': 'bg-orange-200 text-orange-600 rounded-full p-2', 
        'Hygiejne': 'bg-green-200 text-green-600 rounded-full p-2', 
        'Dokumenter': 'bg-gray-200 text-gray-600 rounded-full p-2'
    }
    const iconColorStyles: string = colorMapObj[categoryObj.type as keyof typeof colorMapObj]


    const checklistItems = categoryObj.data.map((item, index) => {
        const borderValue = item.label === 'KRITISK' ? 'border-red-100' : 'border-gray-100'
        const badgeColor = {
            'KRITISK': 'red',
            'VIGTIG': 'gray',
            'NYTTIG': 'white'
        }
        return (
            <div key={index} className={clsx(borderValue, 'flex', 'items-start', 'gap-2', 'p-3', 'border-2', 'rounded-lg', 'text-xs')}>
                <input type='checkbox' name={item.title} onChange={(e) => toggleChecked(e.target.checked, item.label)}/>
                <div className="flex flex-col gap-1 w-full mt-[-1px]">
                    <div className='flex justify-between'>
                        <label htmlFor={item.title} className="font-bold flex gap-2">{item.title}</label>
                        <Badge color={badgeColor[item.label]}>{item.label}</Badge>
                    </div>
                    <p className="text-gray-600">Mængde: {item.amount}</p>
                    {item?.comment && <li className="italic marker:text-gray-600">{item.comment}</li>}
                </div>
            </div>
        )
    })

    const elementCountStyle = fractionDone === 1 ? 'bg-green-700 text-white' : 'border-gray-300'

    return (
        <div className="flex flex-col gap-3 border border-gray-200 p-4 rounded-lg text-sm">
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <div className={iconColorStyles}>
                        <Icon className='h-4 w-4'/>
                    </div>
                    <div>
                        <h3>{categoryObj.type}</h3>
                        <p className='text-xs text-gray-600'>{elementCount} elementer</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className={clsx(elementCountStyle, 'border', 'rounded-lg', 'px-2', 'text-xs', 'flex', 'items-center', 'py-1')}>
                        {`${Math.round(fractionDone * 100)}% i mål`}
                    </span>
                    <ProgressBar value={fractionDone}/>
                </div>
            </div>
        
            <div className='flex flex-col gap-2'>
                {checklistItems}
            </div>

        </div>
    )
}

        