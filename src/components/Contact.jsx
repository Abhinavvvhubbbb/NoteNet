import { PhoneCall, Instagram, MapPin } from 'lucide-react'
import React from 'react'
function Contact() {
    const H = () => {
        location.href = 'https://www.instagram.com/notenetofficial182019'
    }
    return (
        <div className='mt-20' >
            <div className='text-[#424242] p-7 space-y-2 ' >
                <h1 className='font-bold text-center text-3xl ' >Get in touch</h1>
                <h1 className='text-center text-2xl ' >we'd love to hear from you</h1>
            </div>
            <div className='p-7' >
                <h1 className='text-2xl font-semibold' >Send us a message</h1>
            </div>
            <section className=' p-2 gap-2 bg-gradient-to-r from-red-600 via-orange-500 to-pink-400 grid md:grid-cols-2 text-[#424242] ' >
                <form action="" className='bg-white rounded-2xl space-y-2 shadow-lg p-5' >
                    <h1 className='font-semibold ' >Full name</h1>
                    <input type="text" placeholder='Enter name' className='w-full  border-1 border-[#948f8f] rounded-[8px] p-3' />
                    <h1 className='font-semibold ' >Email address</h1>
                    <input type="text" placeholder='Enter your email' className='w-full border-1 border-[#948f8f] rounded-[8px]  p-3' />
                    <h1 className='font-semibold' >Subject</h1>
                    <select name="query" id="contact_query" className='p-3 border-1 border-[#948f8f] w-full rounded-[8px]' >
                        <option value="">Select a subject</option>
                        <option value="">General query</option>
                        <option value="">Student support</option>
                        <option value="">Teacher support</option>
                        <option value="">Request a feature</option>
                        <option value="">Institute partenrship</option>
                        <option value="">Feedback</option>
                        <option value="">Other</option>
                    </select>
                    <h1 className='font-semibold' >Message</h1>
                    <textarea name="textarea" id="textarea" className='w-full border-1 border-[#948f8f] p-3 rounded-[8px] ' placeholder='Enter you message...' rows={5}></textarea>
                    <button className='font-semibold text-white p-3 w-full rounded-[8px] hover:scale-98 transition ease-in duration-150 cursor-pointer bg-gradient-to-r from-red-600 via-orange-500 to-pink-400' >Send</button>
                </form>
                <div className='bg-[#f3f1f7] rounded-2xl space-y-2 p-5 '>
                    <h1 className='font-bold text-lg' >Contact information</h1>
                    <section className=' space-y-5 text-[#424242] gap-2 ' >
                        <div className=' bg-white shadow-lg hover:scale-101 cursor-pointer transition ease-in duration-150 p-5 border-l-5 rounded-2xl' >
                            <MapPin className='bg-gradient-to-r from-red-600 via-orange-500 to-pink-400 text-white h-10 w-10 p-2 rounded-full' />
                            <h1 className='font-semibold text-lg' >office address</h1>
                            <h1>B1/460,  Nand Nagri, New Delhi-110093</h1>
                        </div>
                        <div className=' bg-white shadow-lg hover:scale-101 cursor-pointer transition ease-in duration-150 p-5 border-l-5 rounded-2xl' >
                            <PhoneCall className='bg-gradient-to-r from-red-600 via-orange-500 to-pink-400 text-white h-10 w-10 p-2 rounded-full' />
                            <h1 className='font-semibold text-lg' >Phone</h1>
                            <h1>+91 9319824630</h1>
                            <h1>All 7 days 10am to 7pm</h1>
                        </div>
                        <div className=' bg-white shadow-lg hover:scale-101 cursor-pointer transition ease-in duration-150 p-5 border-l-5 rounded-2xl' >
                            <Instagram onClick={H} className='bg-gradient-to-r from-red-600 via-orange-500 to-pink-400 text-white h-10 w-10 p-2 rounded-full' />
                            <h1 className='font-semibold text-lg' >Instagram</h1>
                            <h1>Feel free to Dm us</h1>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Contact