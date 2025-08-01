import React from 'react'
import { Link } from 'lucide-react'
import Google from '../assets/Google.png'
function Login() {
    return (
        <div className='mt-20' >
            <div className='bg-gradient-to-r from-red-600 via-orange-500 to-pink-400 gap-5 grid md:grid-cols-2 p-7' >
                <form action="" className='text-[#424242] order-2 md:order-1 p-5 bg-white rounded-2xl shadow-lg max-w-3xl space-y-3 '>
                    <h1 className='text-lg font-semibold text-center' >Log in</h1>
                    <h1 className='font-semibold ' >Username</h1>
                    <input type="text" className=' outline-1 outline-[#948f8f] p-3 w-full rounded-[8px] ' placeholder='Enter name' />
                    <h1 className='font-semibold ' >Password</h1>
                    <input type="password" className=' outline-1 outline-[#948f8f] p-3 w-full rounded-[8px] ' placeholder='Enter password' />
                    <button className='bg-gradient-to-r from-red-600 via-orange-500 to-pink-400 p-3 rounded-[8px] text-white w-full hover:scale-99 transition ease-in duration-100' >Log in</button>
                </form>
                <div className='flex justify-center md:order-2 order-1 items-center' >
                <h1 className='text-3xl text-white text-center font-bold ' >Log in to NoteNet</h1>
                </div>
            </div>
        </div>
    )
}

export default Login