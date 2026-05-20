import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#292929]'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#e4e2dd]'>Hi there. My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] font-[jakarta]'>Precious Sunday</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#9c9699]'>I am a FullStack Developer.</h2>
            <p className='text-[#9c9699] py-4 max-w-[700px]'>
                With a specialty in quality assurance techniques and building user-centered web/mobile applications, my tech stack includes (but is not limited to):
                React, HTML5/CSS, TailwindCSS, Next.js, Node.js, Docker, Postman, and PostgreSQL. I am passionate about creating seamless user experiences and writing clean, 
                efficient code. I am always eager to learn new technologies and take on challenging projects that allow me to grow as a developer.
            </p>

            <div>
                <button className='flex items-center group gap-2 bg-[#9c9699] border-2 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors duration-300'>
                    View My Work 
                    <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight /></span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home