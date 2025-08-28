import Headline from '@/app/components/Headline'
import { BookOpen } from 'lucide-react'

export default async function TipsPage() {

    return (
        <section className='mx-4'>
            <Headline color='blue' Icon={BookOpen} title='Overlevelsestips'>Følg nedenstånde instruktioner for bedst at håndtere en krisesituation.</Headline>
        </section>
    )
}

