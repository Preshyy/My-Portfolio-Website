import React from 'react'
import ReactTailwind from '../assets/projects/react-tailwind.png'
import HTMLCSS from '../assets/projects/html-css.png'
import FigmaImg from '../assets/figma.png'
import ReactFirebase from '../assets/projects/react-firebase.png'

const Projects = () => {
  return (
    <div name="projects" className='w-full md:h-screen text-[#ccd6f6] bg-[#292929] py-40'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#ccd6f6]'>Projects</p>
                <p className='py-4'>My recent projects</p>
            </div>

            {/* Container for projects */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item 1 */}
                <div style={{backgroundImage: `url(${FigmaImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center hover:scale-110 duration-500 py-4 items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>My Figma Portfolio</span>
                        <div className='pt-8 text-center'>
                            <a href="https://www.figma.com/proto/ufX7uDIhiwC8K1fRgFYtQY/Precious-Sunday---Portfolio?node-id=404-13&p=f&t=xYdbu1C6e69IQ0GM-1&scaling=contain&content-scaling=fixed&page-id=0%3A1" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Slideshow</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Item 2 */}
                <div style={{backgroundImage: `url(${HTMLCSS})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center hover:scale-110 duration-500 py-4 items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>Auto-Shop Website</span>
                        <div className='pt-8 text-center'>
                            <a href="https://psychic-mechanic.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/Preshyy/Psychic-Mechanic" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repository</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Item 3 */}
                <div style={{backgroundImage: `url(${ReactTailwind})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center hover:scale-110 duration-500 py-4 items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>This Website</span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/Preshyy/My-Portfolio-Website" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repository</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Item 4 */}
                <div style={{backgroundImage: `url(${ReactFirebase})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center hover:scale-110 duration-500 py-4 items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-white tracking-wider'>Firebase Authenticator</span>
                        <div className='pt-8 text-center'>
                            <a href="https://web-authenticator-ruddy.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/Preshyy/Web-Authenticator" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repository</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Item 5 */}

            </div>
        </div>
    </div>
  )
}

export default Projects