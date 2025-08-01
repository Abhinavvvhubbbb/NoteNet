import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
function Footer() {
    const [currentdate, setDate] = useState(new Date().getFullYear())
    return (
        <div>
            <div className='bg-[#262626] space-y-5 p-8 text-gray-500  ' >
                <h1 className='text-center md:text-3xl text-2xl ' > &copy; {currentdate} NoteNet. All rights reserved</h1>
                <nav className='space-y-5 border-t-1 border-b-1 py-3 border-[#a3a3a358] ' >
                    <h1 className='font-semibold text-2xl ' >Quick links</h1>
                    <ul className='flex gap-3 md:flex-row flex-col' >
                        <li className='hover:text-gray-300 transition ease-in duration-150 cursor-pointer' ><NavLink to='/about' className={(param)=>param.isActive ? 'text-gray-300' : '' } >About</NavLink></li>
                        <li className='hover:text-gray-300 transition ease-in duration-150 cursor-pointer' ><NavLink to='/contact' className={(param)=>param.isActive ? 'text-gray-300' : '' } >Contact</NavLink></li>
                        <li className='hover:text-gray-300 transition ease-in duration-150 cursor-pointer' ><NavLink to='/feature' className={(param)=>param.isActive ? 'text-gray-300' : '' } >How it works</NavLink></li>
                        
                    </ul>
                </nav>
                <h1 className='text-center' >Abhinav Productions</h1>
            </div>
        </div>
    )
} 

export default Footer