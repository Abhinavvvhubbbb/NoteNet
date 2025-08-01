import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchIcon, User, User2Icon } from 'lucide-react'
function Homelayout() {
    return (
        <div className='mt-20' >
            <div className=' min-h-170  '  >
                <div className='p-5 flex justify-end' >
                </div>
                <div className=' p-2' >
                    <h1 className='text-center text-2xl text-[#424242]' >Study material, shared by students & teachers, across every institute.</h1>
                </div>
                <div className=' p-5 flex justify-center gap-x-2 ' >
                    <input type="text" placeholder='Search here for anything' className='  outline-1 sm:w-1/2 w-full p-1 rounded-[8px]  outline-[#948f8f]' />
                    <button><SearchIcon className=' shadow-lg bg-gradient-to-r from-red-600 via-orange-500 to-pink-400  cursor-pointer text-white h-12 w-12 rounded-[8px] p-2 ' /></button>
                </div>
                <div className='flex justify-center gap-x-2' >
                    <button className='bg-gray-100 shadow-lg cursor-pointer text-[#424242] rounded-[8px] p-2' >Search Study Material</button>
                    <button className='bg-gray-100 shadow-lg cursor-pointer text-[#424242] rounded-[8px] p-2' >I'm Feeling Smart</button>
                </div>
            </div>
        </div>
    )
}

export default Homelayout