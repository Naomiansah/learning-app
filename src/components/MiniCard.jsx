import React from 'react'
import { Link } from 'react-router'

const MiniCard = () => {
  return (
    <div>
      <Link to={"/lessons"}>
        <div className='border-4 border-black bg-white max-w-sm '>
          <img src="#" alt="leaf lesson" className='w-full h-48 object-cover ' />
          <div className='p-4'>
            <h3 className='text-xl font-bold mb-1'>💧 Water Wonders</h3>
            <p className='text-gray-600 mb-3'>
              <span className='font-medium'>L-1</span>
              <span className='mx-2'>•</span>
              <span>Discover the water cycle and how water travels through nature</span>
            </p>
          </div>
          <div className='flex items-center text-gray-700 mt-4'>
            <span className='mr-2 text-red-500'>&#9733;</span>
            <span> Lesson + Activity</span>
          </div>
        </div>

      </Link>

    </div>
  )
}

export default MiniCard