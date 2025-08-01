import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Hand, Upload } from 'lucide-react'
function Profile() {
  const locate = useNavigate()
  const [upload, setUpload] = useState(false)  // handles the upload button's state
  const Uploadhandler = () => {
    setUpload(true)
  }
  const Uploadfn = () => {
    locate("/upload")
  }
  return (
    <div className='mt-20' >
      <div className=' p-5 flex justify-end' >
        <button onClick={Uploadhandler} className='bg-gradient-to-r from-red-600 via-orange-500 to-pink-400 text-white border-1 shadow-lg hover:scale-98 cursor-pointer transition ease-in duration-150 p-2 rounded-[9px] flex ' ><Upload /> Upload</button>
        {upload && <div className=' text-white top-36 rounded-[8px]  bg-gradient-to-r from-red-600 via-orange-500 to-pink-400 fixed p-2 cursor-pointer' >
          <button onClick={Uploadfn} >Upload from gallery</button>
        </div>}
      </div>
      <div className=' p-7' >
        <h1 className='text-2xl' >Welcome, </h1>
      </div>
      <div className='grid grid-cols-2 gap-2 p-5 ' >
        <div className='bg-gray-200 shadow-lg rounded-[8px] space-y-2 p-2 border-t-5 border-[#424242] ' >
          <h1 className='text-center text[#424242] font-semibold ' >Total uploads</h1>
          <h1 className='text-center' >0</h1>
        </div>
        <div className='bg-gray-200 shadow-lg rounded-[8px] space-y-2 p-2 border-t-5 border-[#424242]' >
          <h1 className='text-center text[#424242] font-semibold '>Total downloads</h1>
          <h1 className='text-center'>0</h1>
        </div>
      </div>
      <div className=' min-h-80 space-y-10 p-7 bg-gradient-to-r from-red-600 via-orange-500 to-pink-400' >
        <h1 className='text-white font-semibold text-2xl text-center ' >Your study material uploads</h1>
        <div className='flex flex-col items-center gap-2 ' >
          <h1 className='text-white text-lg ' >You haven't uploaded anything yet.</h1>
          <h1 className='text-white ' >Start sharing your knowledge now </h1>
        </div>
      </div>
    </div>
  )
}

export default Profile