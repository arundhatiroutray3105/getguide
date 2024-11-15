import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 '>
          <p className="justify">Cracking an interview with Exponent or preparing for interviews using their resources requires strategic preparation across technical, behavioral, and case-related aspects. Technical interviews focus on coding, algorithms, and system design, requiring a solid grasp of data structures like arrays, linked lists, trees, and graphs, alongside algorithms for sorting, searching, and dynamic programming. For system design, particularly for senior roles, it's important to understand scalable architecture principles, such as load balancing, caching, and database sharding, while practicing design for systems like chat apps or e-commerce platforms.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Exponent offers excellent resources, including mock interviews, video tutorials, and structured frameworks, to aid preparation. Practicing clear articulation of your thought process, asking clarifying questions during problem-solving, and demonstrating confidence are key to success. Researching the company and tailoring your responses to its needs also plays a significant role. Feedback from mock interviews or previous attempts should guide your improvements. Consistent practice, strategic preparation, and resilience are your tools to ace the interview process.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE: </b>
          <p>Access to a network of trusted top industry professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p >Tailored recommendations and reminders to help you stay on top of career.</p>
        </div>
      </div>

    </div>
  )
}

export default About
