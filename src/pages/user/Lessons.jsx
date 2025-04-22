import React from 'react'
import eva from '../../assets/images/eva.png';


const Lessons = () => {
  return (
    <section className='relative w-full'>
      {/* hero section */}
      <div>
        <section className="relative h-screen w-full"
          style={{
            backgroundImage: `url(${eva})`,
          }}
        >
          <div className='absolute inset-0 bg-black backdrop-blur-md opacity-50 z-10'></div>
          <div className='absolute inset-0 bg-black opacity-15 z-10'></div>
          <div className='relative z-20 flex flex-col justify-center items-start text-white px-20 pt-20 pb-20 h-full space-y-6'>
            <h1 className='font-bold text-5xl leading-tight'>
              SkillSprout Lesson Module: Water Wonders
            </h1>
            <h2 className='text-xl max-w-3xl'>
              Learn how water moves through nature in a big circle called the water cycle — from clouds to rain to rivers and back up again.
            </h2>
          </div>
        </section>
      </div>
      {/* lesson content */}
      <div className='bg-[#EAEADF]'>
        <div class="max-w-2xl mx-auto  rounded-lg ">
          {/* Header with Icon */}
          <div class="flex items-center justify-center m-auto">
            <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-yellow-400 rounded mr-3"></div>
            <h4 class="text-2xl font-bold">Mini Lesson Content</h4>
          </div>
          {/* Read time  */}
          <p class="italic text-gray-500 text-center  pl-3 mb-6">(~2-3 mins read time, visual and friendly tone)</p>

          {/* Title and intro  */}
          <p class="text-xl font-bold mb-2">Title: "Where Does Water Go?"</p>
          <p class="mb-4">Have you ever wondered where rain comes from — or where puddles disappear to? Water is on a never-ending adventure. It's called the <span class="font-bold">water cycle</span>, and it has four big moves:</p>

          {/* Water cycle steps  */}
          <ol class="mb-6 space-y-4">
            <li class="flex">
              <span class="text-2xl mr-3">☀️</span>
              <div>
                <span class="mr-1 font-bold">1. Evaporation:</span>
                The sun warms up lakes, rivers, and puddles. The water turns into invisible gas and floats into the sky.
              </div>
            </li>

            <li class="flex">
              <span class="text-2xl mr-3">☁️</span>
              <div>
                <span class="mr-1 font-bold">2. Condensation:</span>
                Up in the sky, the water gas cools down and turns into tiny droplets. These droplets stick together to make clouds!
              </div>
            </li>

            <li class="flex">
              <span class="text-2xl mr-3">🌧️</span>
              <div>
                <span class="mr-1 font-bold">3. Precipitation:</span>
                When clouds get heavy with water, it falls back to the ground as rain, snow, or hail. Splash!
              </div>
            </li>

            <li class="flex">
              <span class="text-2xl mr-3">🌊</span>
              <div>
                <span class="mr-1 font-bold">4. Collection:</span>
                The water flows into rivers, lakes, oceans — or soaks into the ground. Then it starts all over again!
              </div>
            </li>
          </ol>
          {/*         
        <Fun fact  */}
          <div class="bg-[#FCD34D] p-4 rounded-md">
            <p><span class="font-bold">Fun Fact</span>: The water you drink could be the same water a dinosaur once drank!</p>
          </div>
        </div>
        {/* quiz section */}
        <div class="max-w-2xl mx-auto py-8 px-4">
          <div class="bg-white rounded-xl shadow-lg p-6">
            <h1 class="text-2xl font-bold text-blue-600 mb-6 flex items-center">
              <span class="text-3xl mr-2">🎮</span> Interactive Water Cycle Quiz
            </h1>

            <div id="quiz-container" class="space-y-8">
              {/* Question 1 */}
              <div class="question-container bg-blue-50 rounded-lg p-4">
                <h2 class="font-bold text-lg mb-3">1. What makes water rise into the sky?</h2>
                <div class="space-y-2">
                  <div class="option cursor-pointer bg-white hover:bg-gray-100 p-3 rounded-md border border-gray-200"
                    data-correct="false" onclick="selectAnswer(this)">
                    <span class="flex items-center">
                      <span class="mr-2">A.</span> Clouds
                      <span class="ml-auto hidden checkmark">✓</span>
                    </span>
                  </div>
                  <div class="option cursor-pointer bg-white hover:bg-gray-100 p-3 rounded-md border border-gray-200"
                    data-correct="true" onclick="selectAnswer(this)">
                    <span class="flex items-center">
                      <span class="mr-2">B.</span> The Sun
                      <span class="ml-auto hidden checkmark">✓</span>
                    </span>
                  </div>
                  <div class="option cursor-pointer bg-white hover:bg-gray-100 p-3 rounded-md border border-gray-200"
                    data-correct="false" onclick="selectAnswer(this)">
                    <span class="flex items-center">
                      <span class="mr-2">C.</span> The Moon
                      <span class="ml-auto hidden checkmark">✓</span>
                    </span>
                  </div>
                </div>
                <div class="mt-3 hidden feedback correct-feedback bg-green-100 text-green-800 p-2 rounded">
                  Correct! The sun provides the heat energy needed for evaporation.
                </div>
                <div class="mt-3 hidden feedback incorrect-feedback bg-red-100 text-red-800 p-2 rounded">
                  Incorrect. The Sun's heat causes water to evaporate and rise into the sky.
                </div>
              </div>

              {/* Question 2  */}
              <div class="question-container bg-blue-50 rounded-lg p-4">
                <h2 class="font-bold text-lg mb-3">2. What is it called when water falls from clouds?</h2>
                <div class="space-y-2">
                  <div class="option cursor-pointer bg-white hover:bg-gray-100 p-3 rounded-md border border-gray-200"
                    data-correct="false" onclick="selectAnswer(this)">
                    <span class="flex items-center">
                      <span class="mr-2">A.</span> Evaporation
                      <span class="ml-auto hidden checkmark">✓</span>
                    </span>
                  </div>
                  <div class="option cursor-pointer bg-white hover:bg-gray-100 p-3 rounded-md border border-gray-200"
                    data-correct="true" onclick="selectAnswer(this)">
                    <span class="flex items-center">
                      <span class="mr-2">B.</span> Precipitation
                      <span class="ml-auto hidden checkmark">✓</span>
                    </span>
                  </div>
                  <div class="option cursor-pointer bg-white hover:bg-gray-100 p-3 rounded-md border border-gray-200"
                    data-correct="false" onclick="selectAnswer(this)">
                    <span class="flex items-center">
                      <span class="mr-2">C.</span> Collection
                      <span class="ml-auto hidden checkmark">✓</span>
                    </span>
                  </div>
                </div>
                <div class="mt-3 hidden feedback correct-feedback bg-green-100 text-green-800 p-2 rounded">
                  Correct! Precipitation is when water falls from clouds as rain, snow, sleet, or hail.
                </div>
                <div class="mt-3 hidden feedback incorrect-feedback bg-red-100 text-red-800 p-2 rounded">
                  Incorrect. Precipitation is when water falls from clouds as rain, snow, sleet, or hail.
                </div>
              </div>

              {/* Question 3  */}
              <div class="question-container bg-blue-50 rounded-lg p-4">
                <h2 class="font-bold text-lg mb-3">3. Which part of the water cycle happens underground or in lakes and oceans?</h2>
                <div class="space-y-2">
                  <div class="option cursor-pointer bg-white hover:bg-gray-100 p-3 rounded-md border border-gray-200"
                    data-correct="false" onclick="selectAnswer(this)">
                    <span class="flex items-center">
                      <span class="mr-2">A.</span> Condensation
                      <span class="ml-auto hidden checkmark">✓</span>
                    </span>
                  </div>
                  <div class="option cursor-pointer bg-white hover:bg-gray-100 p-3 rounded-md border border-gray-200"
                    data-correct="true" onclick="selectAnswer(this)">
                    <span class="flex items-center">
                      <span class="mr-2">B.</span> Collection
                      <span class="ml-auto hidden checkmark">✓</span>
                    </span>
                  </div>
                  <div class="option cursor-pointer bg-white hover:bg-gray-100 p-3 rounded-md border border-gray-200"
                    data-correct="false" onclick="selectAnswer(this)">
                    <span class="flex items-center">
                      <span class="mr-2">C.</span> Precipitation
                      <span class="ml-auto hidden checkmark">✓</span>
                    </span>
                  </div>
                </div>
                <div class="mt-3 hidden feedback correct-feedback bg-green-100 text-green-800 p-2 rounded">
                  Correct! Collection (also called accumulation) is when water gathers in oceans, lakes, rivers, and underground.
                </div>
                <div class="mt-3 hidden feedback incorrect-feedback bg-red-100 text-red-800 p-2 rounded">
                  Incorrect. Collection (also called accumulation) is when water gathers in oceans, lakes, rivers, and underground.
                </div>
              </div>
            </div>

            <div class="mt-8 text-center">
              <button id="check-btn" onclick="checkAnswers()" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200">
                Check Answers
              </button>
              <div id="score-display" class="mt-4 hidden font-bold text-lg"></div>
            </div>

            <div class="mt-6 p-4 bg-blue-100 rounded-lg">
              <h3 class="font-bold text-blue-800">Water Cycle Reminder:</h3>
              <p class="text-blue-700">The water cycle has four main steps: evaporation (water rises), condensation (clouds form), precipitation (rain falls), and collection (water gathers).</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Lessons