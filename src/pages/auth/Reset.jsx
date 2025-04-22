import React from 'react'

const Reset = () => {
  return (
    <div>
      <div
        className="min-h-screen bg-[url(assets/images/regimg.png)]  flex flex-col gap-8 items-center  justify-center bg-cover bg-center"

      >
        <div className='absolute inset-0 bg-black backdrop-blur-md opacity-50 z-10'></div>
        <div className="bg-white relative z-10 bg-opacity-30  p-8 rounded-lg shadow-xl w-full max-w-xl">
          <h2 className="text-2xl font-bold text-center text-[#685BC7] mb-2">Welcome back!</h2>
          <p className="text-center text-[#A1A3A1] mb-6">It's great to see you again</p>
          <form>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
            />
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">Code</label>
            <input
              type="code"
              id="code"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
            />
            {/* password confirmation */}
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">New Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
            />
            <button
              type="submit"
              className="w-50 block mx-auto bg-[#48C631] hover:bg-green-700 text-white font-semibold px-2 py-2 mt-4 rounded"
            >
              Reset Password
            </button>
          </form>
          <div className="my-4 border-t text-center relative">
            <span className="absolute top-[-0.7rem] left-1/2 transform -translate-x-1/2 bg-white bg-opacity-30 px-2 text-gray-700"></span>
          </div>
        </div>
        <div className=''>
          <h3 className="font-bold relative z-10 text-center text-white text-2xl">SkillSprout</h3>
        </div>
      </div>
      </div>
  );
};

export default Reset;