import Headline from '@/app/components/Headline'
import { Package } from 'lucide-react'

export default async function SuppliesPage() {

    return (
        <section className='mx-4'>
            <Headline color='yellow' Icon={Package} title='Tjekliste med nødforsyninger'>Følg nedenstående tjekliste for at sikre dig at du har de nødvendige forsyninger hvis du skal klare dig i en krisesituation.</Headline>
        </section>
    )
}