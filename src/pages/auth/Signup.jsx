import React from "react";
import { apiSignUp } from "../../services/auth";
import { useNavigate } from "react-router";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await apiSignUp(formData);
      const user = response.data
      localStorage.setItem('token', user.token)

      navigate('/dashboard')
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-[url(assets/images/regimg.png)]  flex flex-col gap-8 items-center pt-0 justify-center bg-cover bg-center">
      <div className="absolute inset-0  backdrop-blur-md opacity-50 z-10"></div>
      <div className="bg-white bg-opacity-30 relative z-10 p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#685BC7] mb-2">
          Welcome back!
        </h2>
        <p className="text-center text-[#A1A3A1] mb-6">
          It's great to see you again
        </p>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-900"
          >
            Fullname*
          </label>
          <input
            name="fullname"
            type="text"
            id="fullname"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
          />
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-900"
          >
            Email*
          </label>
          <input
            name="email"
            type="email"
            id="email"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
          />
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-900"
          >
            Password*
          </label>
          <input
            name="password"
            type="password"
            id="password"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
          />
          <div className="flex justify-between items-center mt-4 text-sm">
            <a href="/signup" className="text-[#A1A3A1] hover:underline">
              Have an account? Login
            </a>
            <a
              href="/forgot-password"
              className="text-[#A1A3A1] hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-30 block mx-auto  bg-[#48C631] hover:bg-green-700 text-white font-semibold py-2  md:py-2 mt-4 rounded"
          >
            Sign Up
          </button>
        </form>
        <div className="my-4 border-t text-center relative">
          <span className="absolute top-[-0.7rem] left-1/2 transform -translate-x-1/2 bg-white bg-opacity-30 px-2 text-gray-700"></span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
