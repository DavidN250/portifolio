import React from 'react'
import aboutImage from '../img/about-image.gif'
import AboutTabs from './Tabs'

function About() {
  return (
    <>
      <hr />
      <div className='flex flex-col gap-5 md:flex-row '>
        <div className='w-1/2'>
            <img src={aboutImage} alt="" />
        </div>

        {/* Right Side */}

        <div className='w-1/2 px-4 flex flex-col font-bold  justify-center text-center'>
          <h1 className='py-3 mt-4 text-3xl text-blue-950'>About Me</h1>
          <p className='font-normal text-center text-lg'>
          Hi, I'm John Doe, a passionate and versatile software developer with a focus on 
          web development.
          </p>
          <AboutTabs/>
        </div>
      </div>
    </>
  )
}

export default About
