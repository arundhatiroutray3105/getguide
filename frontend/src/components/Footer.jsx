import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>  Cracking an interview with Exponent or preparing for interviews using their resources requires strategic preparation across technical, behavioral, and case-related aspects. Technical interviews focus on coding, algorithms, and system design, requiring a solid grasp of data structures like arrays, linked lists, trees, and graphs, alongside algorithms for sorting, searching, and dynamic programming. For system design, particularly for senior roles, it's important to understand scalable architecture principles, such as load balancing, caching, and database sharding, while practicing design for systems.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91-9988776655</li>
            <li>exponent@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 @ exponent.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
