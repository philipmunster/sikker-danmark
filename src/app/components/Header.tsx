import { Shield } from 'lucide-react'

export default function Header() {
    return (
        <header className="bg-brand flex items-center gap-4 p-4 w-full">
            <Shield className='stroke-white h-8 w-8'/>
            <div className='text-white'>
                <h1 className='font-bold text-xl'>Sikker Danmark</h1>
                <p>Beredskab uden internet</p>
            </div>
        </header>
    )
}