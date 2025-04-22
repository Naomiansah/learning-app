import React from 'react'

const OfflineCard = () => {
  return (
    <div>

      <a href="">  <div className="border-4 border-black bg-white">
                      <img src='#' alt="" className="w-full h-48 object-cover" />
                      <div className="p-4">
                        <h3 className="text-xl font-bold mb-1">💧 Water Wonders</h3>
                        <div className="text-gray-600 mb-3">
                          <div className="flex items-center">
                            <span className="font-medium">2nd</span>
                            <span className="mx-2">•</span>
                            <span className='mb-2'>Explore and learn how clouds form, why it rains, and how water helps living things.</span>
                          </div>
      
                        </div>
                      </div>
                      < div className=" flex flex-col space-y-2 text-gray-700">
                        <div className="flex items-center">
                          <span className="text-red-500 mr-2">&#9733;</span>
                          <span>Lesson + Activity</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-red-500 mr-2">&#10003;</span>
                          <p>Hands-On Exploration</p>
                        </div>
                      </div>
                    </div>
                    </a>
      
    </div>
  )
}

export default OfflineCard