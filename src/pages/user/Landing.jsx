import React from "react";
import play from "../../assets/images/play.jpg";
import explore from "../../assets/images/explore.jpg";
import leaf from "../../assets/images/leaf.jpg";
import compost from "../../assets/images/compost.jpg";
import water from "../../assets/images/water.jpg";
import sprout from "../../assets/images/sprout.jpg";
import MiniCard from "../../components/MiniCard";
import OfflineCard from "../../components/OfflineCard";
import {
  ActivityIcon,
  AwardIcon,
  BookIcon,
  GlobeIcon,
  MicroscopeIcon,
  PaletteIcon,
  PuzzleIcon,
} from "lucide-react";
import hyyer from "../../assets/images/hyyer.png";

const Landing = () => {
  return (
    //  hero section with navbar
    <div>
      <div className="flex flex-col w-full relative">
        <section className="relative h-screen w-full">
          <div className="absolute inset-0 bg-[url(assets/images/hero.png)] bg-no-repeat bg-center bg-cover z-0"></div>
          <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
          <div className="relative z-20 flex flex-col justify-center items-start h-full px-8 sm:px-16 md:px-24">
            <h1 className="text-white text-4xl sm:text-4xl md:text-4xl font-bold leading-tight tracking-wide">
              Grow Curious Minds with Nature Inspired Learning
            </h1>
            <p className="mt-6 text-white text-sm sm:text-sm font-medium max-w-xl leading-relaxed">
              Short, interactive lesson that make learning Science,
              <br />
              art,language, and sustainability fun for kids <br /> aged{" "}
              <span className="font-semibold">7-12</span>.
            </p>
          </div>
        </section>
        {/* get free access section */}
        <section>
          <div className="bg-[#FCD34D] w-full py-7 px-4 flex flex-col md:flex-row items-center justify-around">
            <div>
              <p className="text-[12px]">
                New to SkillSprout?<strong>Get a free trial</strong> until
                September 20, 2026! <br /> Only{" "}
                <strong>4,567 free trials</strong> remaining.&#10067;
              </p>
            </div>
            <div className="flex text-[12px] gap-4">
              <button className="bg-white text-black text-center py-2 px-7 rounded-lg border-2 border-black">
                Start Learning Free
              </button>

              <button className="bg-black text-white text-center py-2 px-7 rounded-lg">
                See How it Works
              </button>
            </div>
          </div>
        </section>
        {/* Subjects We Cover Section */}
        <section className="py-16 px-6 md:px-16 text-center bg-[#FFFBE1]">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2E4414]">
            Explore Our Learning Branches
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-green-100 p-6 rounded-2xl shadow-sm text-center">
              <MicroscopeIcon className="mx-auto mb-4 h-8 w-8 text-green-700" />
              <h3 className="font-semibold text-xl mb-2 text-[#008236]">
                Science
              </h3>
              <p className="text-sm text-green-800">
                Discover how the world works, from bugs to black holes.
              </p>
            </div>

            <div className="bg-yellow-100 p-6 rounded-2xl shadow-sm text-center">
              <BookIcon className="mx-auto mb-4 h-8 w-8 text-yellow-700" />
              <h3 className="font-semibold text-xl mb-2 text-[#A65F00]">
                Language Arts
              </h3>
              <p className="text-sm text-green-800">
                Read, write, and express ideas with nature-inspired themes.
              </p>
            </div>

            <div className="bg-orange-100 p-6 rounded-2xl shadow-sm text-center">
              <PaletteIcon className="mx-auto mb-4 h-8 w-8 text-orange-700" />
              <h3 className="font-semibold text-xl mb-2 text-[#CA3500]">
                Visual Arts
              </h3>
              <p className="text-sm text-green-800">
                Create wild masterpieces from what you see outside.
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-2xl shadow-sm text-center">
              <GlobeIcon className="mx-auto mb-4 h-8 w-8 text-blue-700" />
              <h3 className="font-semibold text-xl mb-2 text-[#1447E6]">
                Environmental Studies
              </h3>
              <p className="text-sm text-green-800">
                Learn to care for the planet, one lesson at a time.
              </p>
            </div>
          </div>
        </section>
        {/*  How it works section */}
        <section
          className="relative bg-cover bg-center py-16 px-6 md:px-16 text-center"
          style={{
            backgroundImage: `url(${hyyer})`,
          }}
        >
          <div className="absolute inset-0 bg-white backdrop-blur-md opacity-10 z-10"></div>
          <div className="absolute inset-0 bg-black opacity-15 z-10"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Learning Made Fun & Friendly
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto mb-18">
              Here's how SkillSprout sparks curiosity and growth in every
              learner.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-[#C3C592] p-6 rounded-2xl shadow-md text-center border border-green-100">
                <PuzzleIcon className="mx-auto mb-4 h-10 w-10 text-black" />
                <h3 className="font-semibold text-xl mb-2">Pick a Module</h3>
                <p className="text-sm text-black">
                  Choose a topic that sparks curiosity.
                </p>
              </div>

              <div className="bg-[#A8BE98] p-6 rounded-2xl shadow-md text-center border border-green-100">
                <ActivityIcon className="mx-auto mb-4 h-10 w-10 text-black" />
                <h3 className="font-semibold text-xl mb-2">Play & Learn</h3>
                <p className="text-sm text-black">
                  Watch, read, draw, or explore with short activities.
                </p>
              </div>

              <div className="bg-[#C3C592] p-6 rounded-2xl shadow-md text-center border border-green-100">
                <AwardIcon className="mx-auto mb-4 h-10 w-10 text-black" />
                <h3 className="font-semibold text-xl mb-2">
                  Earn Sprout Points
                </h3>
                <p className="text-sm text-black">
                  Level up and unlock nature badges!
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Parent & Educator Section */}
        <section className="py-16 px-6 md:px-16 text-center bg-[#CAAFF6]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built with Heart. Backed by Learning Science.
            </h2>
            <p className="text-lg text-black mb-8">
              We design every module with educators and child development
              experts to ensure SkillSprout is not only fun but foundational.
              Parents can track progress, set goals, and watch their child
              blossom into a curious, conscious learner.
            </p>
            <button
              size="lg"
              className="bg-white border-2 border-black hover:bg-[#FFDF41] text-black text-lg px-6 py-3 rounded-2xl"
            >
              See Curriculum Standards
            </button>
          </div>
        </section>

        {/* popular mini Lessons */}

        <div className="px-6 py-8 bg-[#EAEADF] w-full">
          <div className="flex justify-around items-center mb-6">
            <p className="text-xl font-semibold">Popular mini Lessons</p>
            <a href="" className="text-black hover:underline">
              See More <span className="">›</span>
            </a>
          </div>
          {/* mini lessons cards here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  max-w-4xl mx-auto">
            {/* first card */}
            <a href="">
              {" "}
              <div className="border-4 border-black bg-white max-w-sm ">
                <img
                  src={water}
                  alt="leaf lesson"
                  className="w-full h-48 object-cover "
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-1">💧 Water Wonders</h3>
                  <p className="text-gray-600 mb-3">
                    <span className="font-medium">L-1</span>
                    <span className="mx-2">•</span>
                    <span>
                      Discover the water cycle and how water travels through
                      nature
                    </span>
                  </p>
                </div>
                <div className="flex items-center text-gray-700 mt-4">
                  <span className="mr-2 text-red-500">&#9733;</span>
                  <span> Lesson + Activity</span>
                </div>
              </div>
            </a>

            <div>
              {/* second card */}

              <a href="">
                <div className="border-4 border-black bg-white max-w-sm ">
                  <img
                    src={leaf}
                    alt="leaf lesson"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-1">
                      🍃 Leaf Detectives{" "}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      <span className="font-medium">L-2</span>
                      <span className="mx-2">•</span>
                      <span>
                        Explore different types of leaves and what they tell us
                        about trees.
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center text-gray-700 mt-4">
                    <span className="mr-2 text-red-500">&#9733;</span>
                    <span> Lesson + Activity</span>
                  </div>
                </div>
              </a>
            </div>
            {/* third card */}
            <a href="">
              {" "}
              <div>
                <div className="border-4 border-black bg-white max-w-sm ">
                  <img
                    src={compost}
                    alt="leaf lesson"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-1">
                      🪱 Soil Explorers
                    </h3>
                    <p className="text-gray-600 mb-3">
                      <span className="font-medium">L-3</span>
                      <span className="mx-2">•</span>
                      <span>
                        Dive into the world beneath our feet and meet
                        earthworms, fungi, and roots.
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center text-gray-700 mt-4">
                    <span className="mr-2 text-red-500">&#9733;</span>
                    <span> Lesson + Activity</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* Offline Activities */}
        {/* Nature based Activities */}
        <div className="bg-[#EAEADF] py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-around items-center mb-6 ">
              <h2 className="text-2xl font-bold">Nature Based Activities</h2>
              <a
                href="#"
                className="text-black hover:underline flex items-center"
              >
                See more <span className="">›</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Card one */}
              <a href="">
                <div className="border-4 border-black bg-white">
                  <img
                    src={compost}
                    alt=""
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-1">
                      🪱 Soil Explorers
                    </h3>
                    <div className="text-gray-600 mb-3">
                      <div className="flex items-center">
                        <span className="font-medium">A</span>
                        <span className="mx-2">•</span>
                        <span>
                          Dive into the world beneath our feet and meet
                          earthworms, fungi, and roots.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col space-y-2 text-gray-700">
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">&#9733;</span>
                      <span>Lesson + Activity</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">&#10003;</span>
                      <a href="" className="">
                        Hands-On Exploration
                      </a>
                    </div>
                  </div>
                </div>
              </a>

              {/* Card two */}
              <a href="">
                {" "}
                <div className="border-4 border-black bg-white">
                  <img
                    src={water}
                    alt=""
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-1">💧 Water Wonders</h3>
                    <div className="text-gray-600 mb-3">
                      <div className="flex items-center">
                        <span className="font-medium">2nd</span>
                        <span className="mx-2">•</span>
                        <span className="mb-2">
                          Explore and learn how clouds form, why it rains, and
                          how water helps living things.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-col space-y-2 text-gray-700">
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">&#9733;</span>
                      <span>Lesson + Activity</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">&#10003;</span>
                      <a href="" className="">
                        Hands-On Exploration
                      </a>
                    </div>
                  </div>
                </div>
              </a>

              {/* Card three */}
              <a href="">
                {" "}
                <div className="border-4 border-black bg-white">
                  <img
                    src={leaf}
                    alt="bird watchers"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-1">
                      🍃 Leaf Detectives
                    </h3>
                    <div className="text-gray-600 mb-3">
                      <div className="flex items-center">
                        <span className="font-medium">3rd</span>
                        <span className="mx-2">•</span>
                        <span>
                          Explore different types of leaves and what they tell
                          us about trees.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col space-y-2 text-gray-700">
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">&#9733;</span>
                      <span>Lesson + Activity</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">&#10003;</span>
                      <a href="" className="">
                        Hands-On Exploration
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* summary section */}
        <section>
          <div className="bg-[#FCA5A5] py-16">
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
                    Every day is full of tiny adventures! From watching
                    raindrops race down a window to spotting a beetle under a
                    rock, the world around us is bursting with questions,
                    colors, and discoveries.
                    <br />
                    <br />
                    At Skills Sprout, we turn everyday moments into magical
                    learning , one leaf, cloud, bug, or puddle at a time. Let's
                    explore the science and nature hiding in plain sight!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="bg-[#4999ED] py-16 px-6 md:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            What Families Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div className="bg-white p-6 border-l-8 border-[#923589] shadow-xl rounded-xl text-left">
              <p className="text-lg text-black  mb-4">
                “My daughter actually asks to do SkillSprout after dinner!”
              </p>
              <div className="font-semibold text-black"> Kofi, Parent</div>
            </div>
            <div className="bg-white p-6 border-r-8 border-[#7FAF44] shadow-xl rounded-xl text-left">
              <p className="text-lg text-black  mb-4">
                “The earth badge challenge got my son to plant his first tree!”
              </p>
              <div className="font-semibold text-black"> Akos, Educator</div>
            </div>
          </div>
        </section>

        {/* get free access section */}
        <section>
          <div className="bg-[#FCD34D] w-full py-7 px-4 flex flex-col md:flex-row items-center justify-around">
            <div>
              <p className="text-[12px]">
                New to SkillSprout?<strong>Get a free trial</strong> until
                September 20, 2026! <br /> Only{" "}
                <strong>4,567 free trials</strong> remaining.&#10067;
              </p>
            </div>
            <div className="flex text-[12px] gap-4">
              <button className="bg-white text-black text-center py-2 px-7 rounded-lg border-2 border-black">
                Start Learning Free
              </button>

              <button className="bg-black text-white text-center py-2 px-7 rounded-lg">
                See How it Works
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
