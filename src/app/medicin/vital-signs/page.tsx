import { Users, CircleCheckBig } from "lucide-react"

export default function VitalSignsPage() {
    return (
        <section className="mb-4 bg-neutral-100 border-x-2 border-b-2 border-neutral-200 p-4 rounded-b-lg">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex flex-col gap-6
            md:flex-row md:flex-wrap md:items-stretch md:gap-4
            ">
                <p className="text-sm text-blue-800">Følgende er reference værdier for normale vitale tegn. Værdierne er udelukkende vejlende.</p>
                <div className="flex flex-col gap-2 text-sm md:w-[calc(50%-0.5rem)]">
                    <div className="flex gap-2 items-center">
                        <Users className="h-4 w-4 text-blue-800"/>
                        <p className="font-semibold text-blue-800">Voksne (+18 år)</p>
                    </div>
                    <div className="flex gap-2 items-center ml-6 bg-white p-2 rounded-lg border border-blue-300">
                        <CircleCheckBig className="h-3 w-3 text-gray-800"/>
                        <p className="text-gray-800">Puls: 60-100 slag/min</p>
                    </div>
                    <div className="flex gap-2 items-center ml-6 bg-white p-2 rounded-lg border border-blue-300">
                        <CircleCheckBig className="h-3 w-3 text-gray-800"/>
                        <p className="text-gray-800">Vejrtrækning: 12-20 /min</p>
                    </div>
                    <div className="flex gap-2 items-center ml-6 bg-white p-2 rounded-lg border border-blue-300">
                        <CircleCheckBig className="h-3 w-3 text-gray-800"/>
                        <p className="text-gray-800">Blodtryk: 120/80 mmHg</p>
                    </div>
                    <div className="flex gap-2 items-center ml-6 bg-white p-2 rounded-lg border border-blue-300">
                        <CircleCheckBig className="h-3 w-3 text-gray-800"/>
                        <p className="text-gray-800">Temperatur: 36-37.5°C</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 text-sm md:w-[calc(50%-0.5rem)]">
                    <div className="flex gap-2 items-center">
                        <Users className="h-4 w-4 text-blue-800"/>
                        <p className="font-semibold text-blue-800">Teenagere (13-17 år)</p>
                    </div>
                    <div className="flex gap-2 items-center ml-6 bg-white p-2 rounded-lg border border-blue-300">
                        <CircleCheckBig className="h-3 w-3 text-gray-800"/>
                        <p className="text-gray-800">Puls: 60-100 slag/min</p>
                    </div>
                    <div className="flex gap-2 items-center ml-6 bg-white p-2 rounded-lg border border-blue-300">
                        <CircleCheckBig className="h-3 w-3 text-gray-800"/>
                        <p className="text-gray-800">Vejrtrækning: 12-20 /min</p>
                    </div>
                    <div className="flex gap-2 items-center ml-6 bg-white p-2 rounded-lg border border-blue-300">
                        <CircleCheckBig className="h-3 w-3 text-gray-800"/>
                        <p className="text-gray-800">Blodtryk: 110-120/70-80 mmHg</p>
                    </div>
                    <div className="flex gap-2 items-center ml-6 bg-white p-2 rounded-lg border border-blue-300">
                        <CircleCheckBig className="h-3 w-3 text-gray-800"/>
                        <p className="text-gray-800">Temperatur: 36-37.5°C</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 text-sm md:w-[calc(50%-0.5rem)]">
                    <div className="flex gap-2 items-center">
                        <Users className="h-4 w-4 text-blue-800"/>
                        <p className="font-semibold text-blue-800">Børn (5-12 år)</p>
                    </div>
                    <div className="flex gap-2 items-center ml-6 bg-white p-2 rounded-lg border border-blue-300">
                        <CircleCheckBig className="h-3 w-3 text-gray-800"/>
                        <p className="text-gray-800">Puls: 70-120 slag/min</p>
                    </div>
                    <div className="flex gap-2 items-center ml-6 bg-white p-2 rounded-lg border border-blue-300">
                        <CircleCheckBig className="h-3 w-3 text-gray-800"/>
                        <p className="text-gray-800">Vejrtrækning: 16-25 /min</p>
                    </div>
                    <div className="flex gap-2 items-center ml-6 bg-white p-2 rounded-lg border border-blue-300">
                        <CircleCheckBig className="h-3 w-3 text-gray-800"/>
                        <p className="text-gray-800">Blodtryk: 90-110/55-75</p>
                    </div>
                    <div className="flex gap-2 items-center ml-6 bg-white p-2 rounded-lg border border-blue-300">
                        <CircleCheckBig className="h-3 w-3 text-gray-800"/>
                        <p className="text-gray-800">Temperatur: 36-37.5°C</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 text-sm md:w-[calc(50%-0.5rem)]">
                    <div className="flex gap-2 items-center">
                        <Users className="h-4 w-4 text-blue-800"/>
                        <p className="font-semibold text-blue-800">Småbørn (1-4 år)</p>
                    </div>
                    <div className="flex gap-2 items-center ml-6 bg-white p-2 rounded-lg border border-blue-300">
                        <CircleCheckBig className="h-3 w-3 text-gray-800"/>
                        <p className="text-gray-800">Puls: 80-140 slag/min</p>
                    </div>
                    <div className="flex gap-2 items-center ml-6 bg-white p-2 rounded-lg border border-blue-300">
                        <CircleCheckBig className="h-3 w-3 text-gray-800"/>
                        <p className="text-gray-800">Vejrtrækning: 20-30 /min</p>
                    </div>
                    <div className="flex gap-2 items-center ml-6 bg-white p-2 rounded-lg border border-blue-300">
                        <CircleCheckBig className="h-3 w-3 text-gray-800"/>
                        <p className="text-gray-800">Blodtryk: 80-110/55-70 mmHg</p>
                    </div>
                    <div className="flex gap-2 items-center ml-6 bg-white p-2 rounded-lg border border-blue-300">
                        <CircleCheckBig className="h-3 w-3 text-gray-800"/>
                        <p className="text-gray-800">Temperatur: 36.5-37.5°C</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 text-sm md:w-[calc(50%-0.5rem)]">
                    <div className="flex gap-2 items-center">
                        <Users className="h-4 w-4 text-blue-800"/>
                        <p className="font-semibold text-blue-800">Babyer (0-1 år)</p>
                    </div>
                    <div className="flex gap-2 items-center ml-6 bg-white p-2 rounded-lg border border-blue-300">
                        <CircleCheckBig className="h-3 w-3 text-gray-800"/>
                        <p className="text-gray-800">Puls: 100-160 slag/min</p>
                    </div>
                    <div className="flex gap-2 items-center ml-6 bg-white p-2 rounded-lg border border-blue-300">
                        <CircleCheckBig className="h-3 w-3 text-gray-800"/>
                        <p className="text-gray-800">Vejrtrækning: 30-60 /min</p>
                    </div>
                    <div className="flex gap-2 items-center ml-6 bg-white p-2 rounded-lg border border-blue-300">
                        <CircleCheckBig className="h-3 w-3 text-gray-800"/>
                        <p className="text-gray-800">Blodtryk: 70-100/50-65 mmHg</p>
                    </div>
                    <div className="flex gap-2 items-center ml-6 bg-white p-2 rounded-lg border border-blue-300">
                        <CircleCheckBig className="h-3 w-3 text-gray-800"/>
                        <p className="text-gray-800">Temperatur: 36.5-37.5°C</p>
                    </div>
                </div>
            </div>
        </section>
    )
}