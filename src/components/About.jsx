import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#292929] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#ccd6f6]'>About</p>
                </div>
                <div>

                </div>
            </div>

                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Nice to e-meet you! Take a look around C:</p>
                    </div>
                    <div>
                        <p className='text-[#9c9699] py-4 max-w-[700px]'>
                            Having worked in three US based tech startups and a tech giant like Amazon, I have developed a specialization in building scalable web and mobile applications. 
                            Hiring me will come with the benefit of a unique perspective to development by combining high-level frontend expertise in React/React Native with a deep 
                            understanding of low-level systems, computer architecture, and user centered technology designs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About