import React, { useState } from 'react'
import { Instagram, Settings } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Abhinav from '../assets/Abhinav.png'
import Aditya from '../assets/Aditya.png'
import Harsh from '../assets/Harsh.png'
function About() {
  const naviagte = useNavigate();
  const AbhinavId=()=>{
    location.href = 'https://www.instagram.com/abhignite/'
  }
  const AdityaId=()=>{
    location.href = 'http://instagram.com/professorrx1/'
  }
  const HarshId=()=>{
    location.href = 'https://www.instagram.com/h_u_n_n_y_y_05/'
  }
  return (

    <div className='mt-20' >
      <div className=' p-7 flex items-center justify-between ' >
        <h1 className='text-3xl font-bold text-[#424242] ' >About NoteNet</h1>
      </div>
      <section className='grid md:grid-cols-2 gap-2 p-5 bg-gradient-to-r from-red-600 via-orange-500 to-pink-400 ' >
        <div className='bg-white text-[#424242] p-5 rounded-2xl shadow-lg border-l-6 space-y-2 ' >
          <h1 className='font-semibold text-lg' >What is NoteNet ?</h1>
          <h1>NoteNet is a academic content sharing platform where students and teachers can share and explore high quality study material like:- <strong>Notes</strong>, <strong>Worksheets</strong>, and <strong>Important questions</strong>. it's designed to make learning <strong>faster</strong>, <strong>organized</strong>, and more accessible for everyone </h1>
        </div>
        <div className='bg-white text-[#424242] p-5 rounded-2xl shadow-lg  border-l-6 space-y-2  ' >
          <h1 className='font-semibold text-lg ' >Who is it for ?</h1>
          <h1>NoteNet is built for both <strong>students</strong> and <strong>teachers</strong>  students can find academic material, while teachers can share structured content to help their class to prepare better everyone benefits from a clean and organised study ecosystem.</h1>
        </div>
        <div className='bg-white text-[#424242] p-5 rounded-2xl shadow-lg border-l-6 space-y-2 ' >
          <h1 className='font-semibold text-lg  '>What problem does it solve ?</h1>
          <h1>Study resources today are scattered across chats, social media, and unorganized folders. Students waste time searching, and teachers often repeat efforts. NoteNet provides a single platform to store, find, and share academic content efficiently.</h1>
        </div>
        <div className='bg-white p-5 text-[#424242] rounded-2xl shadow-lg border-l-6 space-y-2  ' >
          <h1 className='font-semibold text-lg ' >Our mission</h1>
          <h1> Our mission is to become India's leading academic sharing network where knowledge flows freely between students and teachers. We aim to reduce the stress of exam preparation and enable a smarter, faster way to study.</h1>
        </div>
      </section>
      <section className='p-7 bg-[#f3f1f7]' >
        <h1 className=' text-center font-bold text-[#424242] text-3xl' >Meet our team</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 p-5 gap-7  ' >
          <div className='bg-white shadow-lg hover:scale-103 transition ease-in duration-150 rounded-2xl p-5 flex flex-col items-center ' >
            <img src={Abhinav} className=' rounded-full h-38 w-38 object-cover' alt="" />
            <h1 className='bg-gradient-to-r from-red-600 via-orange-500 to-pink-400 text-white p-2 rounded-2xl' >CEO</h1>
            <div className='flex flex-col items-center gap-2' >
              <h1 className='text-[#424242] font-bold text-2xl mt-10 ' >Abhinav</h1>
              <h1 className='text-[#424242] text-center mt-5 ' ><strong>Visionary leader</strong> who built this platform from scratch and is leading the company forward.</h1>
              <Instagram onClick={AbhinavId} className=' cursor-pointer  mt-5 transition ease-in duration-150 hover:bg-gradient-to-r hover:from-red-500 hover:via-orange-400 hover:to-pink-300 h-13 p-2 rounded-2xl  w-13 bg-gradient-to-r from-red-600 via-orange-500 to-pink-400 text-white' />
            </div>
          </div>
          <div className='bg-white shadow-lg hover:scale-103 transition ease-in duration-150 rounded-2xl p-5 flex flex-col items-center ' >
            <img src={Aditya} className=' rounded-full h-38 w-38 object-cover' alt="" />
            <h1 className='bg-gradient-to-r from-red-600 via-orange-500 to-pink-400 text-white p-2 rounded-2xl' >CFO</h1>
            <h1 className='text-[#424242] font-bold text-2xl mt-10  ' >Aditya goswami</h1>
            <h1 className='text-[#424242] text-center mt-5 ' ><strong>Finance Strategist</strong> and Chief of Finance, managing the company's financial direction and growth.</h1>
            <Instagram onClick={AdityaId}  className=' cursor-pointer mt-5 transition ease-in duration-150 hover:bg-gradient-to-r hover:from-red-500 hover:via-orange-400 hover:to-pink-300 h-13 p-2 rounded-2xl  w-13 bg-gradient-to-r from-red-600 via-orange-500 to-pink-400 text-white' />
          </div>
          <div className='bg-white shadow-lg hover:scale-103 transition ease-in duration-150 rounded-2xl p-5 flex flex-col items-center ' >
            <img src={Harsh} className='rounded-full h-38 w-38 object-cover' alt="" />
            <h1 className='bg-gradient-to-r from-red-600 via-orange-500 to-pink-400 text-white p-2 rounded-2xl' >COO</h1>
            <h1 className='text-[#424242] font-bold text-2xl mt-10  ' >Harsh bhojraj</h1>
            <h1 className='text-[#424242] text-center mt-5 ' ><strong>Operations Head</strong> and Chief of Execution, ensuring seamless operations and smooth workflow across the platform.</h1>
            <Instagram  onClick={HarshId} className=' cursor-pointer mt-5 transition ease-in duration-150 hover:bg-gradient-to-r hover:from-red-500 hover:via-orange-400 hover:to-pink-300 h-13 p-2 rounded-2xl  w-13 bg-gradient-to-r from-red-600 via-orange-500 to-pink-400 text-white' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About