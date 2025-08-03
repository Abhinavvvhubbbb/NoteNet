import React from 'react'
import { LogIn, Menu } from 'lucide-react'
import { createBrowserRouter, RouterProvider, Outlet, NavLink } from "react-router-dom";
import About from './components/About';
import Homelayout from './components/Homelayout';
import { useState } from 'react'
import Profile from './components/Profile';
import Footer from './components/Footer';
import Error from './components/Error';
import Contact from './components/Contact';
import Upload from './components/Upload';
import Register from './components/Register';
import Login from './components/Login'
import Feature from './components/Feature';
function Navbar() {
  const [menu, setMenu] = useState(false)
  const Togglemenu = () => {
    setMenu(!menu)
  }
  return (
    <div>
    <title>NoteNet</title>
      <div>
        <nav className=' bg-white h-20 flex items-center justify-between border-b-1 top-0 fixed w-screen ' >
          <h1 className='text-[#424242] text-2xl md:text-4xl mx-7 ' >NoteNet</h1>
          <ul className='flex gap-5 mx-7 text-white ' >
            <li className='sm:block text-[#424242] hidden hover:scale-110 cursor-pointer transition ease-in duration-150 font-semibold '><NavLink to='/' className={(param) => param.isActive ? 'bg-gradient-to-r from-red-600 via-orange-500 to-pink-400 p-2 text-white rounded-[8px] transition ease-in duration-150  ' : ''}>Home</NavLink></li>
            <li className='sm:block text-[#424242] hidden hover:scale-110 cursor-pointer transition ease-in duration-150 font-semibold '><NavLink to='/profile' className={(param) => param.isActive ? 'bg-gradient-to-r from-red-600 via-orange-500 to-pink-400 p-2 text-white rounded-[8px] transition ease-in duration-150 ' : ''} >Profile</NavLink></li>
            <li className='sm:block text-[#424242] hidden hover:scale-110 cursor-pointer transition ease-in duration-150 font-semibold '><NavLink to='/register' className={(param) => param.isActive ? 'bg-gradient-to-r from-red-600 via-orange-500 to-pink-400 p-2 text-white rounded-[8px] transition ease-in duration-150 ' : ''} >Register</NavLink></li>
            <li className='sm:hidden'><Menu onClick={Togglemenu} className={menu ? ' text-[#424242] rotate-90 transition ease-in duration-200' : 'rotate-0 text-[#424242]'} /></li>
          </ul>
        </nav>
        {menu && <div className=" mt-19 bg-white top-0 w-full fixed p-12 border-t-1 border-gray-100 " >
          <ul className="text-white flex flex-col gap-y-3 items-center" >
            <li className='font-semibold text-[#424242] ' onClick={() => setMenu(false)} ><NavLink className={(param) => param.isActive ? 'bg-gradient-to-r from-red-600 via-orange-500 to-pink-400 p-2 text-white rounded-[8px]' : ''} to='/'>Home</NavLink></li>
            <li className='font-semibold text-[#424242] ' onClick={() => setMenu(false)} ><NavLink className={(param) => param.isActive ? 'bg-gradient-to-r from-red-600 via-orange-500 to-pink-400 p-2 text-white rounded-[8px]' : ''} to='/profile' >Profile</NavLink></li>
            <li className='font-semibold text-[#424242] ' onClick={() => setMenu(false)} ><NavLink className={(param) => param.isActive ? 'bg-gradient-to-r from-red-600 via-orange-500 to-pink-400 p-2 text-white rounded-[8px]' : ''} to='/register' >Register</NavLink></li>
          </ul>
        </div>}
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
const App = () => {
  const Router = createBrowserRouter([
    {
      path: '/',
      element: <div> <Navbar /> <Footer /> </div>,
      children: [
        {
          path: '/',
          element: <Homelayout />
        },
        {
          path: '/profile',
          element: <Profile />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/feature',
          element: <Feature />
        },
        {
          path: '/upload',
          element: <Upload />
        },
        {
          path: '*',
          element: <Error />
        }
      ]
    },
  ])
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  )
}
export default App