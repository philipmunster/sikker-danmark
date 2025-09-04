import Headline from '@/app/components/Headline'
import { Phone } from 'lucide-react'
import Navigation from '@/app/phone/Navigation'


export default function PhoneLayout({ children }: {children: React.ReactNode}) {
    return (
        <>
        <section className='mx-4'>
            <Headline color='purple' Icon={Phone} title='Nødkontakter'>Vigtige telefonnumre og kontaktinformation til nødsituationer.</Headline>
        </section>

        <Navigation />

        {children}
        </>
    )
}