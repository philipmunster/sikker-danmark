"use client"

import Headline from '@/app/components/Headline'
import ProgressBar from '@/app/components/ProgressBar'
import ChecklistCard from '@/app/supplies/ChecklistCard'
import { Package, Target, AlertOctagon } from 'lucide-react'
import { suppliesData } from '@/app/data/supplies'
import { useState } from 'react'
import clsx from 'clsx'

export default function SuppliesPage() {

    const [totalCheckedCount, setTotalCheckedCount] = useState({
            'nonCritical': 0,
            'critical': 0
        })

    const totalNonCriticalCount = totalCheckedCount['nonCritical']
    const totalCriticalCount = totalCheckedCount['critical']
    const totalElementCount = suppliesData.reduce((total, category) => (total + category.data.length), 0)
    const totalCriticalElementCount = suppliesData.reduce((total, category) => {
        const criticalOnly = category.data.filter(item => item.label === 'KRITISK')
        return (total + criticalOnly.length)
    }, 0)
    const totalFractionDone = (totalNonCriticalCount + totalCriticalCount) / totalElementCount
    const totalCriticalFractionDone = (totalCriticalCount) / totalCriticalElementCount

    function toggleTotalChecked(checked: boolean, label: 'KRITISK' | 'VIGTIG' | 'NYTTIG'): void {
        const key = label === 'KRITISK' ? 'critical' : 'nonCritical'
        const change = checked ? 1 : -1

        setTotalCheckedCount(prev => ({
            ...prev,
            [key]: prev[key] + change
        }))
    }

    const checklistCards = suppliesData.map((category, index) => {
        return (
            <ChecklistCard key={index} categoryObj={category} toggleTotalChecked={toggleTotalChecked}/>
        )
    })

    const elementCountStyle = totalFractionDone === 1 ? 'bg-green-700 text-white' : 'border-gray-300'

    return (
        <section className='mb-4 flex flex-col gap-4 md:flex-row md:flex-wrap md:items-stretch md:justify-center'>
            <Headline color='yellow' Icon={Package} title='Nødforsyninger'>Følg nedenstående tjekliste for at forberede dig til en krisesituation.</Headline>

            <div className='flex flex-col gap-3 bg-gray-100 p-4 rounded-md text-sm shadow-md md:w-[calc(50%-0.5rem)]'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-3 items-center'>
                        <Target className='h-5 w-5'/>
                        <h3>Samlet fremgang</h3>
                    </div>
                    <span className={clsx(elementCountStyle, 'border', 'rounded-lg', 'px-2', 'text-xs', 'flex', 'items-center', 'py-1')}>
                        {`${totalNonCriticalCount + totalCriticalCount} / ${totalElementCount} elementer`}
                    </span>
                </div>
                <ProgressBar value={totalFractionDone} />
                <p className='text-gray-600'>{`${Math.round(totalFractionDone * 100)}% af alle forsyninger tjekket af`}</p>
            </div>

            <div className='flex flex-col gap-3 bg-red-100 p-4 rounded-md text-sm shadow-md md:w-[calc(50%-0.5rem)]'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-3 items-center'>
                        <AlertOctagon className='h-5 w-5 text-red-700'/>
                        <h3>Kritiske forsyninger</h3>
                    </div>
                    <span className='bg-brand text-white font-semibold rounded-lg px-2 text-xs flex items-center py-1'>
                        {`${totalCriticalCount} / ${totalCriticalElementCount} elementer`}
                    </span>
                </div>
                <ProgressBar value={totalCriticalFractionDone} />
                <p className='text-gray-600'>{`${Math.round(totalCriticalFractionDone * 100)}% af kritiske forsyninger tjekket af`}</p>
            </div>

            {checklistCards}
        </section>
    )
}