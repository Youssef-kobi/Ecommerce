import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='flex justify-between p-6'>
      <p>
        <Link href='/'>logo</Link>
      </p>

      <div className='flex justify-between text-lg  font-semibold '>
        <p className='mr-4 hover:scale-110 duration-100 '>
          <Link href='/'>Home</Link>
        </p>
        <p className='mr-4 hover:scale-110 duration-100'>
          <Link href='/'>Women</Link>
        </p>
        <p className='mr-4 hover:scale-110 duration-100'>
          <Link href='/'>Kids</Link>
        </p>
        <p className='mr-4 hover:scale-110 duration-100'>
          <Link href='/'>About us</Link>
        </p>
        <p className='mr-4 hover:scale-110 duration-100'>
          <Link href='/'>Contact</Link>
        </p>
      </div>
      <button
        className='relative transition-transform duration-200 text-gray-500 hover:scale-110'
        onClick={''}
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
          />
        </svg>
        <span className='absolute -top-2 left-4 text-white-pure bg-orange-700 w-5 h-5 rounded-full flex items-center justify-center text-sm font-semibold'>
          10
        </span>
      </button>
    </nav>
  )
}

export default Navbar
