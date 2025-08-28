import Headline from '@/app/components/Headline'
import { Heart } from 'lucide-react'

export default async function MedicinPage() {

    return (
        <section className='mx-4'>
            <Headline color='red' Icon={Heart} title='Førstehjælp og medicin'>Livsvigtig information til behandling af skader og medicinske nødsituationer.</Headline>
        </section>
    )
}