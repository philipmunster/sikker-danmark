import Headline from '@/app/components/Headline'
import { Heart } from 'lucide-react'
import Navigation from '@/app/medicin/Navigation'


export default function MedicinLayout({ children }: {children: React.ReactNode}) {
    return (
        <>
        <section className='mx-4'>
            <Headline color='red' Icon={Heart} title='Førstehjælp'>Livsvigtig information til behandling af skader og medicinske nødsituationer.</Headline>
        </section>

        <Navigation />

        {children}
        </>
    )
}