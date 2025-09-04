import { firstAidData, type firstAidItem } from "@/app/data/firstAid"
import { Activity, AlertTriangle } from 'lucide-react'

export default function MedicinPage() {

    const stepsItems = firstAidData.map( (item, index) => (
        <div key={item.id} className="flex flex-col gap-6">
            <div className="flex items-start gap-2">
                <span className="bg-brand w-6 aspect-square rounded-full text-white font-semibold flex justify-center items-center text-sm shrink-0">{index + 1}</span>
                <div className="flex flex-col gap-3">
                    <p className="font-semibold">{item.type}</p>
                    {item.steps.map( (step, index) => (
                        <div key={index} className="text-sm flex gap-3 items-start bg-white rounded-md p-3">
                            <span className="bg-neutral-200 rounded-full flex items-center justify-center shrink-0 w-6 aspect-square">{index + 1}</span>
                            <p>{step}</p>
                        </div>
                    ))}
                </div>
            </div>
            {index != firstAidData.length - 1 && <hr className="text-neutral-300"/>}
        </div>
    ))

    return (
        <section className="mb-4 bg-neutral-100 border-x-2 border-b-2 border-neutral-200 p-4 rounded-b-lg flex flex-col gap-4">
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex flex-col gap-4">
                <div className="flex gap-4">
                    <Activity className="text-red-600 h-4 w-4 shrink-0"/>
                    <p className="text-sm text-red-600">Følg disse trin i rækkefølge ved alle medicinske nødsituationer</p>
                </div>
                <div className="flex flex-col gap-6">
                    {stepsItems}
                </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold">Hjertelungeredning (HLR)</h3>
                    <div className="flex gap-4">
                        <AlertTriangle className="text-red-600 h-4 w-4 shrink-0"/>
                        <p className="text-sm text-red-600">Start kun HLR hvis personen ikke trækker vejret. Forkert HLR kan skade en person der trækker vejret normalt.</p>
                    </div>
                </div>
                
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                        <span className="flex items-center justify-center shrink-0 bg-brand rounded-full w-6 aspect-square text-sm text-white font-bold">1</span>
                        <p className="font-semibold text-red-600">Placering og teknik</p>
                    </div>
                    <ul className="text-sm list-disc ml-5 flex flex-col gap-3">
                        <li className="marker:text-red-600">Placér håndfladerne midt på brystet mellem brystvortevoner</li>
                        <li className="marker:text-red-600">Tryk hårdt og hurtigt 5-6 cm ned - brug din kropsvægt</li>
                        <li className="marker:text-red-600">30 kompressioner, så 2 indblæsninger (hvis du kan)</li>
                        <li className="marker:text-red-600">Fortsæt uden stop indtil hjælp kommer eller personen bevæger sig</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                        <span className="flex items-center justify-center shrink-0 bg-brand rounded-full w-6 aspect-square text-sm text-white font-bold">2</span>
                        <p className="font-semibold text-red-600">Rytme og udholdenhed</p>
                    </div>
                    <ul className="text-sm list-disc ml-5 flex flex-col gap-3">
                        <li className="marker:text-red-600">Rytme: 100-120 kompressioner per minut (syng "Staying Alive" i hovedet)</li>
                        <li className="marker:text-red-600">Skift med andre hver 2. minut hvis muligt - du bliver hurtigt træt</li>
                        <li className="marker:text-red-600">30 kompressioner, så 2 indblæsninger (hvis du kan)</li>
                        <li className="marker:text-red-600">Stop kun hvis personen begynder at bevæge sig eller trække vejret</li>
                    </ul>
                </div>
                
            </div>

        </section>
    )
}