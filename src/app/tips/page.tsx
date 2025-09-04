import Headline from '@/app/components/Headline'
import DropdownCritical from '@/app/tips/DropdownCritical'
import Dropdown from '@/app/tips/Dropdown'
import DropdownTop from '@/app/tips/DropdownTop'
import DropdownBottom from '@/app/tips/DropdownBottom'
import { BookOpen } from 'lucide-react'

export default function TipsPage() {

    return (
        <section className='mb-4 flex flex-col gap-4'>
            <Headline color='blue' Icon={BookOpen} title='Overlevelsestips'>Følg nedenstånde instruktioner for bedst at håndtere en krisesituation.</Headline>
            <DropdownCritical />
            <Dropdown 
                colorVariant='blue' 
                iconName='Droplets'
                title='Vand og hygiejne'
                subTitle='Sikker vand og grundlæggende hygiejne' 
                badgeColor='gray' 
                badgeText='højt'
            >

                <DropdownTop title='Vandrensning' color='blue'>
                    <li>Kog vand i mindst 1 minut for at dræbe bakterier</li>
                    <li>Brug vandrensningstabletter hvis tilgængelige</li>
                    <li>Filtrer vand gennem rent tøj først hvis det er grumset</li>
                    <li>Saml regnvand i rene beholdere</li>
                    <li>Undgå vand fra vandløb nær byer eller industri</li>
                </DropdownTop>
                <hr className='text-stone-200'/>
                <DropdownBottom title='Vandrationering' subTitle='Minimum 3 liter per person per dag' color='blue'>
                    <li>Kog vand i mindst 1 minut for at dræbe bakterier</li>
                    <li>Brug vandrensningstabletter hvis tilgængelige</li>
                    <li>Filtrer vand gennem rent tøj først hvis det er grumset</li>
                </DropdownBottom>

            </Dropdown>

            <Dropdown 
                colorVariant='orange' 
                iconName='Target'
                title='Mad og ernæring'
                subTitle='Opbevaring og rationering af mad' 
                badgeColor='gray' 
                badgeText='højt'
            >

                <DropdownTop title='Madopbevaring uden køl' color='orange'>
                    <li>Spis opbevaret mad først, konserves til sidst</li>
                    <li>Hold mad køligt i kælder eller skygge</li>
                    <li>Brug salt til at konservere kød og fisk</li>
                    <li>Røg kød over langsom ild for konservering</li>
                    <li>Kassér mad der lugter eller ser dårlig ud</li>
                </DropdownTop>
                <hr className='text-stone-200'/>
                <DropdownBottom title='Madrationering' subTitle='Lav en plan for madrationering' color='orange'>
                    <li>Spis 2 mindre måltider i stedet for 3 store</li>
                    <li>Prioritér kulhydrater for energi</li>
                    <li>Saml spiselige planter du kender</li>
                </DropdownBottom>

            </Dropdown>
 
            <Dropdown 
                colorVariant='green' 
                iconName='House'
                title='Ly og varme'
                subTitle='Isolation og sikker opvarmning' 
                badgeColor='white' 
                badgeText='medium'
            >

                <DropdownTop title='Improviseret isolation' color='green'>
                    <li>Hæng tæpper over vinduer og døre</li>
                    <li>Brug aviser og karton som ekstra isolation</li>
                    <li>Saml hele familien i det mindste rum</li>
                    <li>Brug kropsvarme - sov tæt sammen</li>
                </DropdownTop>
                <hr className='text-stone-200'/>
                <DropdownBottom title='Sikker opvarmning' subTitle='Vær altid opmærksom på brandfare' color='green'>
                    <li>Hold brand konstant overvåget</li>
                    <li>Brug tørre materialer kun til brændsel</li>
                    <li>Lav kun et lille bål - de er sikrere og bruger mindre brændsel</li>
                </DropdownBottom>

            </Dropdown>
 
            <Dropdown 
                colorVariant='purple' 
                iconName='Users'
                title='Pyske og sammenhold'
                subTitle='Familie og psykisk sundhed' 
                badgeColor='white' 
                badgeText='medium'
            >

                <DropdownTop title='Sikker sammenhold' color='purple'>
                    <li>Bliv sammen som familie/gruppe</li>
                    <li>Etablér nabohjælp med dem du kender</li>
                    <li>Del ressourcer og viden med andre</li>
                    <li>Opret vagtplan for sikkerhed</li>
                    <li>Hjælp svage og ældre i dit område</li>
                </DropdownTop>
                <hr className='text-stone-200'/>
                <DropdownBottom title='Psykisk sundhed' subTitle='Prioter altid din mentale sundhed' color='purple'>
                    <li>Bevar rutiner så meget som muligt</li>
                    <li>Tal om frygt og bekymringer åbent</li>
                    <li>Lav aktiviteter der holder dig i gang (spil, historier, osv.)</li>
                    <li>Fokusér på det du kan kontrollere</li>
                </DropdownBottom>

            </Dropdown>
 
            <Dropdown 
                colorVariant='yellow' 
                iconName='Zap'
                title='Strøm og energi'
                subTitle='Batteriopsparing og alternative kilder' 
                badgeColor='white' 
                badgeText='medium'
            >

                <DropdownTop title='Batteriopsparing' color='yellow'>
                    <li>Sænk skærmens lysstyrke til minimum</li>
                    <li>Hvis muligt, slå batteribesparelsesfunktion til på din telefon</li>
                    <li>Brug lommelygte i stedet for mobil-lygte</li>
                    <li>Opret vagtplan for sikkerhed</li>
                    <li>Gem en powerbank og lad den kun når nødvendigt</li>
                </DropdownTop>
                <hr className='text-stone-200'/>
                <DropdownBottom title='Alternative energikilder' subTitle='Anskaf alternative energikilder hvis muligt' color='yellow'>
                    <li>Sol-powerbanks til at lade enheder</li>
                    <li>Håndkrank radio og lommelygter</li>
                    <li>Træk stikket ud på alt der ikke er kritisk</li>
                </DropdownBottom>

            </Dropdown>
 
        </section>
    )
}
