import { Phone } from 'lucide-react'
import Badge from '@/app/components/Badge'

export default function ContactPage() {

    return (
        <section className="mb-4 bg-neutral-100 border-x-2 border-b-2 border-neutral-200 p-4 rounded-b-lg">
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 flex flex-col gap-4
            md:flex-row md:flex-wrap md:items-stretch
            ">
                <p className='text-sm text-gray-600'>Ring til nedenstående telefonnumre hvis udheldet er ude.</p>

                <div className='flex gap-4 items-center rounded-lg bg-red-50 border border-red-200 p-4 md:w-[calc(50%-0.5rem)]'>
                    <div className='bg-red-200 text-red-500 p-2 rounded-full'>
                        <Phone className='w-4 h-4'/>
                    </div>
                    <div>
                        <h3 className='text-sm font-semibold'>Alle nødsituationer</h3>
                        <p className='text-xs text-gray-700'>Hele døgnet</p>
                    </div>
                    <div className='ml-auto text-right'>
                        <h3 className='text-2xl font-bold text-red-600'>112</h3>
                        <Badge color='red'>kritisk</Badge>
                    </div>
                </div>

                <hr className='text-neutral-300 md:hidden'/>

                <div className='flex gap-4 items-center rounded-lg bg-red-50 border border-red-200 p-4 md:w-[calc(50%-0.5rem)]'>
                    <div className='bg-red-200 text-red-500 p-2 rounded-full'>
                        <Phone className='w-4 h-4'/>
                    </div>
                    <div>
                        <h3 className='text-sm font-semibold'>Akut lægehjælp</h3>
                        <p className='text-xs text-gray-700'>Hele døgnet</p>
                    </div>
                    <div className='ml-auto text-right'>
                        <h3 className='text-2xl font-bold text-red-600'>1813</h3>
                        <Badge color='red'>kritisk</Badge>
                    </div>
                </div>

                <hr className='text-neutral-300 md:hidden'/>

                <div className='flex gap-4 items-center rounded-lg bg-blue-50 border border-blue-200 p-4 md:w-[calc(50%-0.5rem)]'>
                    <div className='bg-blue-200 text-blue-500 p-2 rounded-full'>
                        <Phone className='w-4 h-4'/>
                    </div>
                    <div>
                        <h3 className='text-sm font-semibold'>Giftlinjen</h3>
                        <p className='text-xs text-gray-700'>Hele døgnet</p>
                    </div>
                    <div className='ml-auto text-right'>
                        <h3 className='text-xl font-bold text-blue-600'>82 12 12 12</h3>
                        <Badge color='gray'>vigtig</Badge>
                    </div>
                </div>

                <hr className='text-neutral-300 md:hidden'/>

                <div className='flex gap-4 items-center rounded-lg bg-blue-50 border border-blue-200 p-4 md:w-[calc(50%-0.5rem)]'>
                    <div className='bg-blue-200 text-blue-500 p-2 rounded-full'>
                        <Phone className='w-4 h-4'/>
                    </div>
                    <div>
                        <h3 className='text-sm font-semibold'>Dyrenes vagtcentral</h3>
                        <p className='text-xs text-gray-700'>Hele døgnet</p>
                    </div>
                    <div className='ml-auto text-right'>
                        <h3 className='text-xl font-bold text-blue-600'>1812</h3>
                        <Badge color='gray'>vigtig</Badge>
                    </div>
                </div>

                <hr className='text-neutral-300 md:hidden'/>

                <div className='flex gap-4 items-center rounded-lg bg-blue-50 border border-blue-200 p-4 md:w-[calc(50%-0.5rem)]'>
                    <div className='bg-blue-200 text-blue-500 p-2 rounded-full'>
                        <Phone className='w-4 h-4'/>
                    </div>
                    <div>
                        <h3 className='text-sm font-semibold'>Politiets servicetelefon</h3>
                        <p className='text-xs text-gray-700'>Hele døgnet</p>
                    </div>
                    <div className='ml-auto text-right'>
                        <h3 className='text-xl font-bold text-blue-600'>1813</h3>
                        <Badge color='white'>nyttig</Badge>
                    </div>
                </div>
                
            </div>
        </section>
    )
}