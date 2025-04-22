import React from 'react'
import { Link } from 'react-router';

const Login = () => {
  return (
    <div
      className="min-h-screen bg-[url(assets/images/regimg.png)]  flex flex-col gap-8 items-center  justify-center bg-cover bg-center"

    >
      <div className='absolute inset-0 bg-black backdrop-blur-md opacity-50 z-10'></div>
      <div className="bg-white relative z-10 bg-opacity-30  p-8 rounded-lg shadow-xl w-full max-w-xl">
        <h2 className="text-2xl font-bold text-center text-[#685BC7] mb-2">Welcome back!</h2>
        <p className="text-center text-[#A1A3A1] mb-6">It's great to see you again</p>
        <form>
          <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
          />
          <label htmlFor="password" className="block text-sm font-medium text-black">Password</label>
          <input
            type="password"
            id="password"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
          />
          <div className="flex justify-between items-center mt-4 text-sm">
            <Link to={"/signup"} className="text-[#A1A3A1] hover:underline">
            Don't have an account?
            </Link>
           
            <a href="/forgotpassword" className="text-[#A1A3A1] hover:underline">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="block w-30 mx-auto bg-[#48C631] hover:bg-green-700 text-white font-semibold py-2 mt-4 rounded"
          >
            Log in
          </button>
        </form>
        <div className="my-4 border-t text-center relative">
          <span className="absolute top-[-0.7rem] left-1/2 transform -translate-x-1/2 bg-white bg-opacity-30 px-2 text-gray-700"></span>
        </div>
      </div>
      <h3 className="font-bold text-center relative z-10 text-white text-2xl">SkillSprout</h3>
    </div>
  );
};

export default Login;