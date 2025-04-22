import React from 'react'
import play from '../../assets/images/play.jpg';
import explore from '../../assets/images/explore.jpg';
import leaf from '../../assets/images/leaf.jpg';
import compost from '../../assets/images/compost.jpg';
import water from '../../assets/images/water.jpg';
import sprout from '../../assets/images/sprout.jpg';
import MiniCard from '../../components/MiniCard';
import OfflineCard from '../../components/OfflineCard';




const Landing = () => {
  return (
    //  hero section with navbar
    <div>



      <div className='flex flex-col w-full relative'>

        <section className="relative h-screen w-full">

          <div className='absolute inset-0 bg-[url(assets/images/hero.png)] bg-no-repeat bg-center bg-cover z-0'></div>
          <div className='absolute inset-0 bg-black opacity-20 z-10'></div>
          <div className='relative z-20 flex justify-start items-center text-white pl-20 pt-20 pb-20 h-full'>
            <h1 className='font-bold text-5xl'>
              Empowering Little Minds,<br />
              One Tap <br />
              at a Time!
            </h1>
          </div>
        </section>

        {/* get free access section */}
        <section>
          <div className='bg-[#FCD34D] w-full py-7 px-4 flex flex-col md:flex-row items-center justify-around'>
            <div>
              <p className='text-[12px]'>
                New to SkillSprout?<strong>Get a free trial</strong> until September 20, 2026! <br /> Only <strong>4,567 free trials</strong> remaining.&#10067;
              </p>
            </div>
            <div className='flex text-[12px] gap-4'>
              <input type="text" placeholder='Email address' className='border-2 border-solid border-black bg-white w-[400px] p-2' />
              <button className='bg-black text-white text-center py-2 px-7'>Get free access</button>
            </div>
          </div>
        </section>

        {/* learning outcomes section */}
        <section className='w-full'>

          <div className='bg-[#00C7FC] flex flex-col md:flex-row items-center justify-center w-full  overflow-hidden h-100 max-w-7xl mx-auto'>
            <div className='relative w-full max-w-lg  md:mx-0 mb-8 md:mb-0'>
              <img src={play} alt=" kids playing" className='w-full max-w-[250px] border-3 border-black border-solid rounded-md shadow-xl mx-auto md:mx-0' />
              <img src={explore} alt="Adventure" className='w-full max-w-[250px] border-3 border-black border-solid rounded-md shadow-xl mx-auto md:mx-0 md:absolute md:top-20 md:left-32' />
            </div>
            <div className='w-full md:w-1/2'>
              <h2 className='text-3xl text-black font-bold mb-4'>Learning Comes Alive with SkillSprout</h2>
              <ul className='space-y-2'>
                <li className='flex items-start'>
                  <span className='mr-3 flex items-center justify-center  mr-3 flex items-center justify-center text-white bg-gray-500 rounded-full w-6 h-6 rounded-full w-6 h-6'>&#10003;</span>
                  <a href="" className='hover:underline'>Hands-On Exploration</a>
                </li>
                <li className='flex items-start'>
                  <span className='mr-3 flex items-center justify-center text-white bg-gray-500 rounded-full w-6 h-6'>&#10003;</span>
                  <span>Nature & Sustainability Focus</span>
                </li>
                <li className='flex items-start'>
                  <span className=' mr-3 flex items-center justify-center text-white bg-gray-500 rounded-full w-6 h-6'>&#10003;</span>
                  <span>Gamified & Engaging</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-3 flex items-center justify-center text-white bg-gray-500 rounded-full w-6 h-6'>&#10003;</span>
                  <span> Short & Interactive Lessons</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-3 flex items-center justify-center text-white bg-gray-500 rounded-full w-6 h-6'>&#10003;</span>
                  <span>Standards-Aligned, Curiosity-Driven</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* popular mini Lessons */}

        <div className='px-6 py-8 bg-[#EAEADF] w-full'>
          <div className='flex justify-around items-center mb-6'>
            <p className='text-xl font-semibold'>Popular mini Lessons</p>
            <a href="" className='text-black hover:underline'>See More <span className="">›</span>
            </a>
          </div>
          {/* mini lessons cards here */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  max-w-4xl mx-auto'>
            {
              [1,2,3,].map((mini, index)=>{
                return(
                  <MiniCard
                  key={index}
                  
                  />

                )
              })
            }
            
            {/* first card */}
            

            <div>
              {/* second card */}

              {/* <a href="">
                <div className='border-4 border-black bg-white max-w-sm '>
                  <img src={leaf} alt="leaf lesson" className='w-full h-48 object-cover' />
                  <div className='p-4'>
                    <h3 className='text-xl font-bold mb-1'>🍃 Leaf Detectives </h3>
                    <p className='text-gray-600 mb-3'>
                      <span className='font-medium'>L-2</span>
                      <span className='mx-2'>•</span>
                      <span>Explore different types of leaves and what they tell us about trees.</span>
                    </p>
                  </div>
                  <div className='flex items-center text-gray-700 mt-4'>
                    <span className='mr-2 text-red-500'>&#9733;</span>
                    <span> Lesson + Activity</span>

                  </div>
                </div>
              </a> */}

            </div>
            {/* third card */}
            {/* <a href="">  <div>
              <div className='border-4 border-black bg-white max-w-sm '>
                <img src={compost} alt="leaf lesson" className='w-full h-48 object-cover' />
                <div className='p-4'>
                  <h3 className='text-xl font-bold mb-1'>🪱 Soil Explorers</h3>
                  <p className='text-gray-600 mb-3'>
                    <span className='font-medium'>L-3</span>
                    <span className='mx-2'>•</span>
                    <span>Dive into the world beneath our feet and meet earthworms, fungi, and roots.</span>


                  </p>
                </div>
                <div className='flex items-center text-gray-700 mt-4'>
                  <span className='mr-2 text-red-500'>&#9733;</span>
                  <span> Lesson + Activity</span>
                </div>
              </div>
            </div>
            </a> */}


          </div>
        </div>
        {/* Offline Activities */}
        {/* Nature based Activities */}
        <div className="bg-[#EAEADF] py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-around items-center mb-6 ">
              <h2 className="text-2xl font-bold">Nature Based Activities</h2>
              <a href="#" className="text-black hover:underline flex items-center">
                See more <span className="">›</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
             { 
              [1,2,3].map((card,index)=>{
                return(
                  <OfflineCard
                  key={index}
                  />
                )
              })
             }
             
              
              {/* Card two */}
              

              {/* Card three */}
            
            </div>
          </div>
        </div>
        {/* summary section */}
        <section>
          <div className='bg-[#FCA5A5] py-16'>
            <div className="max-w-6xl mx-auto">
              <h2 className="font-bold text-center text-4xl mb-12">
                Big Wonders in Small Moments
              </h2>

              <div className="flex flex-col md:flex-row gap-1 items-center justify-center text-center px-8 md:px-12">
                <div className="w-full md:w-1/2 flex justify-center  ">
                  <a href="">
                    <img
                      src={sprout}
                      alt="planting image"
                      className="w-80 md:w-96  h-auto border-4 border-black"
                    />
                  </a>
                </div>

                <div className="w-full md:w-1/2">
                  <p className="text-left text-2xl">
                    Every day is full of tiny adventures!
                    From watching raindrops race down a window to spotting a beetle under a rock, the world around us is bursting with questions, colors, and discoveries.
                    <br /><br />
                    At Skills Sprout, we turn everyday moments into magical learning , one leaf, cloud, bug, or puddle at a time.
                    Let's explore the science and nature hiding in plain sight!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* customer section */}
        <section>
          <div className='bg-[#4999ED] h-200 w-full'>
            <h2 className='font-bold text-center '>
              Loved by parents,teachers and students
            </h2>
            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
              {/* card one */}
              <div className="relative">
                <div className="absolute top-3 left-3 w-full h-full bg-red-400 rounded-lg -z-10"></div>
                <div className="bg-white border-2 border-black rounded-lg p-6">
                  <div className="text-4xl font-extrabold text-black mb-4">”</div>
                  <p className="text-lg text-gray-800 mb-6">
                    Both my students and I are loving Skills Sprout!
                    The nature-themed mini lessons are so engaging and age-appropriate.
                    It's such a fun and meaningful way to help kids connect
                    with the world around them.
                    Thank you Skills Sprout for making learning come alive!
                  </p>
                  <p className="font-bold text-black">Efua</p>
                  <p className="text-sm text-gray-700">class  5 Teacher, The Royal School</p>
                </div>
              </div>
              {/* card two */}
              <div className="relative">
                <div className="absolute top-3 left-3 w-full h-full bg-red-400 rounded-lg -z-10"></div>
                <div className="bg-white border-2 border-black rounded-lg p-6">
                  <div className="text-4xl font-extrabold text-black mb-4">”</div>
                  <p className="text-lg text-gray-800 mb-6">
                    Skills Sprout offers thoughtful, engaging lessons
                    that spark curiosity and align beautifully with our goals
                    for holistic, nature-based learning.
                    The content is clear, easy to implement,
                    and gives students exactly what they need to grow
                    both academically and personally.
                  </p>
                  <p className="font-bold text-black">Donkor</p>
                  <p className="text-sm text-gray-700"> GES official, Accra</p>
                </div>
              </div>
              {/* card three */}
              <div className="relative">
                <div className="absolute top-3 left-3 w-full h-full bg-red-400 rounded-lg -z-10"></div>
                <div className="bg-white border-2 border-black rounded-lg p-6">
                  <div className="text-4xl font-extrabold text-black mb-4">”</div>
                  <p className="text-lg text-gray-800 mb-6">
                    My students absolutely crave Skills Sprout lessons.
                    Thank you for bringing nature and sustainability to life
                    not just for them, but for me as an educator too.
                    It's refreshing, inspiring, and so needed in today’s classrooms.
                  </p>
                  <p className="font-bold text-black">Barry</p>
                  <p className="text-sm text-gray-700">class 3 Teacher, Future Academy</p>
                </div>
              </div>
              {/* card four */}
              <div className="relative">
                <div className="absolute top-3 left-3 w-full h-full bg-red-400 rounded-lg -z-10"></div>
                <div className="bg-white border-2 border-black rounded-lg p-6">
                  <div className="text-4xl font-extrabold text-black mb-4">”</div>
                  <p className="text-lg text-gray-800 mb-6">
                    Skills Sprout has been a wonderful addition to our classroom.
                    My students are fully engaged, and
                    I love seeing them connect with nature through meaningful,
                    hands-on lessons. Resources that bring curiosity to life.
                  </p>
                  <p className="font-bold text-black">Seth</p>
                  <p className="text-sm text-gray-700">Principal, Divine Emmanuel Academy</p>
                </div>
              </div>

            </div>

          </div>

        </section>
        {/* second access section */}
        <section>
          <div className='bg-[#FCD34D] w-full py-7 px-4 flex flex-col md:flex-row items-center justify-around'>
            <div>
              <p className='text-[12px]'>
                New to SkillSprout?<strong>Get a free trial</strong> until September 20, 2026! <br /> Only <strong>4,567 free trials</strong> remaining.&#10067;
              </p>
            </div>
            <div className='flex text-[12px] gap-4'>
              <input type="text" placeholder='Email address' className='border-2 border-solid border-black bg-white w-[400px] p-2' />
              <button className='bg-black text-white text-center py-2 px-7'>Get free access</button>
            </div>
          </div>
        </section>
      </div>

    </div>


  )
}

export default Landing