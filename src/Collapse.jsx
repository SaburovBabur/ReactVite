import React, { useState } from 'react'

function Collapse() {
  // State
  const [isActive, setIsActive] = useState(false)

  function toggle() {
    setIsActive(!isActive)
  }

  return (
    <>
      <div className='bg-gray-300 p-5 font-bold'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 | cursor-pointer text-gray-500'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>

      <ul
        style={{ display: isActive ? 'block' : 'none' }}
        className='bg-gray-100 p-10'
      >
        <li>Li</li>
        <li>A tag</li>
        <li>Table</li>
        <li>Image tag</li>
      </ul>
    </>
  )
}

export default Collapse
