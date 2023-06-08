import React from 'react'
import Hero from '../img/hero-image.gif'
import '../css/main.css'
import { Button } from 'flowbite-react'

function HeroSection() {
  return (
    <section>
      <div className="container mt-2 flex flex-col-reverse justify-center md:flex-row">
      {/* leftside */}
      <div className='px-6 py-3 justify-center flex flex-col gap-5'>
        <h1 className='text-2xl font-bold text-blue-950'>David - Full Stack Developper</h1>
        <p className=' text-lg pl-5 text-center md:text-left '>I am a passionate and dedicated full stack web developer with a strong foundation in 
            front-end and back-end technologies. With 5 years of experience, I have successfully 
            delivered numerous projects, ranging from small-scale websites to complex web applications.
        </p>
        <div className='flex gap-5 px-3 py-1 mt-5 content-center text-center'>
          
          <Button
            gradientDuoTone="purpleToBlue"
            outline
          >
            <p>
              GitHub
            </p>
          </Button>
          <Button
            gradientDuoTone="cyanToBlue"
            outline
          >
            <p>
              Twitter
            </p>
          </Button>
          <Button
            gradientDuoTone="greenToBlue"
            outline
          >
            <p>
              Download CV
            </p>
          </Button>
        </div>
      </div>

      {/* Right side */}
      <div>
        <img src={Hero} alt="Hello" />
      </div>
      </div>
    </section>
  )
}
export default HeroSection
