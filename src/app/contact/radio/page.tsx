import { p4Stations } from '@/app/data/radioSignal'

export default function RadioPage() {

    const stationCards = p4Stations.map((station, index) => (
        <div className='flex gap-4 items-center rounded-lg bg-purple-100 border border-purple-200 p-4'>
            <div>
                <h3 className='text-sm font-semibold'>{station.district}</h3>
                <p className='text-xs text-gray-700'>Præcis lokation: {station.sender}</p>
            </div>
            <div className='ml-auto text-right shrink-0'>
                <h3 className='text-xl font-bold text-purple-600'>{station.frequency}</h3>
            </div>
        </div>
    ))

    return (
        <section className="mb-4 bg-neutral-100 border-x-2 border-b-2 border-neutral-200 p-4 rounded-b-lg">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 flex flex-col gap-4">
                <p className='text-sm text-purple-600'>Beredskabsmeddelelser til befolkningen vil blive udsendt på DR’s lokale P4-radiostationer.</p>
                <p className='text-sm text-purple-600'>Vælg den station der er tættest på dig.</p>

                {stationCards}
                
            </div>
        </section>
    )
}