import Link from 'next/link'
import Image from 'next/image'
 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center gap-3 mt-6'>
      <h2 className='font-bold text-3xl'>Hov hov hov...</h2>
      <Image 
        src='/notAllowed.png'
        alt='not allowed meme'
        width={498}
        height={498}
        className='rounded-lg max-w-100'
      />
      <p className=''>Du er da vidst på vej ind på en side der ikke findes.</p>
      <Link href="/"><button className='bg-neutral-100 border border-neutral-200 px-4 py-2 rounded-lg'>Tilbage til forsiden</button></Link>
    </div>
  )
}