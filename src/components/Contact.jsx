import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#292929] flex justify-center items-center p-4'>
        <form method='POST' action="https://forminit.com/f/panvjpma" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#ccd6f6] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Would you like to get in touch?</p>
            </div>

            <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea  className='my-4 p-2 bg-[#ccd6f6]' placeholder='Message' name='message' rows='10' />
            <button className='text-white bg-[#9c9699] border-2 border-[#ccd6f6] hover:bg-transparent hover:text-[#ccd6f6] font-bold py-3 px-4'>Send Message</button>
        </form>
    </div>
  )
}

export default Contact