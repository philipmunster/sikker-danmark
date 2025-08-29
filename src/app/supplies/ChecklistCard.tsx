"use client"

import { Droplets } from 'lucide-react'
import ProgressBar from '@/app/components/ProgressBar'
import { useState } from 'react'
import clsx from 'clsx'

export default function ChecklistCard({ categoryObj }) {

    const [checkedCount, setCheckedCount] = useState({
        'nonCritical': 0,
        'critical': 0
    })

    const nonCriticalCount = checkedCount['nonCritical']
    const criticalCount = checkedCount['critical']
    const elementCount = categoryObj.data.length
    const fractionDone = (nonCriticalCount + criticalCount) / elementCount

    function toggleChecked(checked, label) {
        const key = label === 'KRITISK' ? 'critical' : 'nonCritical'
        const change = checked ? 1 : -1

        setCheckedCount(prev => ({
            ...prev,
            [key]: prev[key] + change
        }))
    }

    const checklistItems = categoryObj.data.map(item => {
        const borderValue = item.label === 'KRITISK' ? 'border-red-100' : 'border-gray-100'

        return (
            <div className={clsx(borderValue, 'flex', 'items-start', 'gap-2', 'p-3', 'border-2', 'rounded-lg', 'text-xs')}>
                <input type='checkbox' name={item.title} onChange={(e) => toggleChecked(e.target.checked, item.label)}/>
                <div className="flex flex-col gap-1">
                    <label htmlFor={item.title} className="font-bold flex gap-2">{item.title}</label>
                    <p className="text-gray-600">Mængde: {item.amount}</p>
                    {item?.comment && <li className="italic marker:text-gray-600">{item.comment}</li>}
                </div>
            </div>
        )
    })

    return (
        <div className="flex flex-col gap-3 border border-gray-200 p-4 rounded-lg text-sm">
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <div>
                        <Droplets />
                    </div>
                    <div>
                        <h3>{categoryObj.type}</h3>
                        <p>{elementCount} elementer</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='border border-gray-300 rounded-lg px-2 text-xs flex items-center py-1'>
                        {`${fractionDone * 100}% i mål`}
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

        