import { LockKeyhole,  LibrarySquareIcon, Handshake } from 'lucide-react'
import React from 'react'
function Feature () {
  return (
    <div className='mt-20' >
        <div className='text-[#424242] p-7 text-center space-y-5 ' >
            <h1 className=' font-bold text-3xl' >How NoteNet works</h1>
            <p className='font-semibold ' >Dicover how you can find best study material, upload your own, and collaborate with students and teachers in one academic network </p>
        </div>
        <div className='bg-gradient-to-r from-red-600 via-orange-500 to-pink-400 p-5' >
                <h1 className='text-center text-white text-3xl ' >3 simple steps to get started</h1>
        </div>
            <section className=' grid md:grid-cols-3 p-8 text-[#424242] gap-5 bg-gradient-to-r from-red-600 via-orange-500 to-pink-400' >
                <div className='bg-white hover:scale-102 transition ease-in duration-150  p-5 rounded-2xl shadow-lg border-l-5 space-y-2 flex flex-col items-center   ' >
                    <LockKeyhole className='h-13 w-13 bg-gradient-to-r from-red-600 via-orange-500 to-pink-400 p-2 text-white rounded-full ' />
                    <h1 className='font-semibold text-center text-lg' >Create your account.</h1>
                    <p className='text-center' >Register with your institute ID to get access to high-quality study resources </p>
                </div>                
                <div className='bg-white hover:scale-102 transition ease-in duration-150  p-5 rounded-2xl shadow-lg border-l-5 space-y-2 flex flex-col items-center   ' >
                    <LibrarySquareIcon className='h-13 w-13 bg-gradient-to-r from-red-600 via-orange-500 to-pink-400 p-2 text-white rounded-full ' />
                    <h1 className='font-semibold text-center text-lg' >Explore and download study resources.</h1>
                    <p className='text-center' >Search topic wise notes, worksheets, and previous, questions curated by top students and teachers </p>
                </div>                
                <div className='bg-white hover:scale-102 transition ease-in duration-150  p-5 rounded-2xl shadow-lg border-l-5 space-y-2 flex flex-col items-center   ' >
                    <Handshake className='h-13 w-13 bg-gradient-to-r from-red-600 via-orange-500 to-pink-400 p-2 text-white rounded-full ' />
                    <h1 className='font-semibold text-center text-lg' >Upload and earn credibility.</h1>
                    <p className='text-center' >Upload your study content and get ranked on relevance.</p>
                </div>                
            </section>

    </div>
  )
}

export default Feature 