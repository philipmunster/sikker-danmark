import Headline from '@/app/components/Headline'
import { Phone } from 'lucide-react'

export default async function PhonePage() {

    return (
        <section className='mx-4'>
            <Headline color='purple' Icon={Phone} title='Nødkontakter'>Vigtige telefonnumre og kontaktinformation til nødsituationer.</Headline>
        </section>
    )
}