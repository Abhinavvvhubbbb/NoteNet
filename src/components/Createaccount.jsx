import React from 'react'
import { Link } from 'react-router-dom'
import Google from '../assets/Google.png'
function Createaccount() {
    return (
        <div className='mt-20' >
            <div>
                <form action="" className='text-[#424242] p-5 bg-white rounded-2xl shadow-lg  space-y-3 '>
                    <h1 className='text-lg font-semibold text-center' >Create an account</h1>
                    <h1 className='font-semibold ' >Full name</h1>
                    <input type="text" className=' outline-1 outline-[#948f8f] p-3 w-full rounded-[8px] ' placeholder='Enter name' />
                    <h1 className='font-semibold ' >Password</h1>
                    <input type="text" className=' outline-1 outline-[#948f8f] p-3 w-full rounded-[8px] ' placeholder='Create password' />
                    <h1 className='font-semibold ' >Role:- Teacher/Student</h1>
                    <input type="text" className=' outline-1 outline-[#948f8f] p-3 w-full rounded-[8px] ' placeholder='Enter your role ' />
                    <h1 className='font-semibold ' >School name</h1>
                    <input type="text" className=' outline-1 outline-[#948f8f] p-3 w-full rounded-[8px] ' placeholder='Enter school name ' />
                    <button className='bg-gradient-to-r from-red-600 via-orange-500 to-pink-400 p-3 rounded-[8px] text-white w-full hover:scale-99 transition ease-in duration-100' >Register</button>
                    <button className='bg-gray-200 flex w-full gap-2 text-[#424242] justify-center hover:scale-98 transition ease-in duration-150 items-center p-2 rounded-[8px] ' > <img src={Google} className='h-8 w-8' alt="" /> Sign up with Google</button>
                    <h1 className='text-center' >Already have an account? <Link className='text-blue-900' >Log In</Link></h1>
                </form>
            </div>
        </div>
    )
}

export default Createaccount