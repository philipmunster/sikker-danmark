import Headline from '@/app/components/Headline'
import Dropdown from '@/app/tips/Dropdown'
import { BookOpen } from 'lucide-react'

export default async function TipsPage() {

    return (
        <section className='mx-4 mb-4 flex flex-col gap-4'>
            <Headline color='blue' Icon={BookOpen} title='Overlevelsestips'>Følg nedenstånde instruktioner for bedst at håndtere en krisesituation.</Headline>
            <Dropdown />
        </section>
    )
}

