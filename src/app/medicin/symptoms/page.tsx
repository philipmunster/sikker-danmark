import { AlertTriangle, Heart, Zap, Activity, Thermometer } from "lucide-react"

export default function SymptomsPage() {
    return (
        <section className="mb-4 bg-neutral-100 border-x-2 border-b-2 border-neutral-200 p-4 rounded-b-lg">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                    <div className="flex gap-4">
                        <AlertTriangle className="text-red-600 h-4 w-4 shrink-0"/>
                        <p className="text-sm text-red-600">Disse tegn kræver omgående medicinsk behandling.</p>
                    </div>
                </div>
                
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                        <span className="flex items-center justify-center shrink-0 bg-red-500 rounded-full w-8 aspect-square text-sm text-white font-bold">
                            <Heart className="w-4 h-4"/>
                        </span>
                        <p className="font-semibold text-red-600">Hjertestop signaler</p>
                    </div>
                    <ul className="text-sm list-disc ml-5 flex flex-col gap-3">
                        <li className="marker:text-red-600">Ingen vejrtrækning eller unormal vejrtrækning (gispende)</li>
                        <li className="marker:text-red-600">Ingen respons på tale eller berøring</li>
                        <li className="marker:text-red-600">Ingen puls (tjek på håndled eller hals i 10 sekunder)</li>
                        <li className="marker:text-red-600">Blå farve omkring læber eller fingre</li>
                    </ul>
                </div>

                <hr className="text-neutral-300"/>
                
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                        <span className="flex items-center justify-center shrink-0 bg-blue-500 rounded-full w-8 aspect-square text-sm text-white font-bold">
                            <Activity className="w-4 h-4"/>
                        </span>
                        <p className="font-semibold text-blue-600">Slagtilfælde signaler</p>
                    </div>
                    <ul className="text-sm list-disc ml-5 flex flex-col gap-3">
                        <li className="marker:text-blue-600">Pludselig forvirring eller tale problemer</li>
                        <li className="marker:text-blue-600">Pludselig kraftesløshed i ansigt, arm eller ben (især en side)</li>
                        <li className="marker:text-blue-600">Pludselig kraftig hovedpine uden kendt årsag</li>
                        <li className="marker:text-blue-600">Pludselige synsproblemer på et eller begge øjne</li>
                        <li className="marker:text-blue-600">Pludselige gangproblemer eller svimmelhed</li>
                    </ul>
                </div>
                
                <hr className="text-neutral-300"/>
                
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                        <span className="flex items-center justify-center shrink-0 bg-yellow-500 rounded-full w-8 aspect-square text-sm text-white font-bold">
                            <Zap className="w-4 h-4"/>
                        </span>
                        <p className="font-semibold text-yellow-700">Shock signaler</p>
                    </div>
                    <ul className="text-sm list-disc ml-5 flex flex-col gap-3">
                        <li className="marker:text-yellow-600">Hurtig, svag puls (over 120 slag/min)</li>
                        <li className="marker:text-yellow-600">Hurtig, overfladisk vejrtrækning</li>
                        <li className="marker:text-yellow-600">Kold, klam hud</li>
                        <li className="marker:text-yellow-600">Bleg eller blålig hudfarve</li>
                        <li className="marker:text-yellow-600">Forvirring, angst eller uro</li>
                    </ul>
                </div>

                <hr className="text-neutral-300"/>
                
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                        <span className="flex items-center justify-center shrink-0 bg-green-500 rounded-full w-8 aspect-square text-sm text-white font-bold">
                            <Thermometer className="w-4 h-4"/>
                        </span>
                        <p className="font-semibold text-green-600">Infektions signaler</p>
                    </div>
                    <ul className="text-sm list-disc ml-5 flex flex-col gap-3">
                        <li className="marker:text-green-600">Feber over 39°C eller under 36°C</li>
                        <li className="marker:text-green-600">Røde striber fra sår op ad arme eller ben</li>
                        <li className="marker:text-green-600">Dårlig lugt fra sår</li>
                        <li className="marker:text-green-600">Kraftig hovedpine med nakkestivhed</li>
                    </ul>
                </div>
                
            </div>
        </section>
    )
}