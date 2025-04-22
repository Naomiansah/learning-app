import React from "react";

const Learn = () => {
  return (
    <div>
      <div class="max-w-2xl mx-auto  rounded-lg ">
        {/* Header with Icon */}
        <div class="flex items-center justify-center m-auto">
          <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-yellow-400 rounded mr-3"></div>
          <h4 class="text-2xl font-bold">Mini Lesson Content</h4>
        </div>
        {/* Read time  */}
        <p class="italic text-gray-500 text-center  pl-3 mb-6">
          (~2-3 mins read time, visual and friendly tone)
        </p>

        {/* Title and intro  */}
        <p class="text-xl font-bold mb-2">Title: "Where Does Water Go?"</p>
        <p class="mb-4">
          Have you ever wondered where rain comes from — or where puddles
          disappear to? Water is on a never-ending adventure. It's called the{" "}
          <span class="font-bold">water cycle</span>, and it has four big moves:
        </p>

        {/* Water cycle steps  */}
        <ol class="mb-6 space-y-4">
          <li class="flex">
            <span class="text-2xl mr-3">☀️</span>
            <div>
              <span class="mr-1 font-bold">1. Evaporation:</span>
              The sun warms up lakes, rivers, and puddles. The water turns into
              invisible gas and floats into the sky.
            </div>
          </li>

          <li class="flex">
            <span class="text-2xl mr-3">☁️</span>
            <div>
              <span class="mr-1 font-bold">2. Condensation:</span>
              Up in the sky, the water gas cools down and turns into tiny
              droplets. These droplets stick together to make clouds!
            </div>
          </li>

          <li class="flex">
            <span class="text-2xl mr-3">🌧️</span>
            <div>
              <span class="mr-1 font-bold">3. Precipitation:</span>
              When clouds get heavy with water, it falls back to the ground as
              rain, snow, or hail. Splash!
            </div>
          </li>

          <li class="flex">
            <span class="text-2xl mr-3">🌊</span>
            <div>
              <span class="mr-1 font-bold">4. Collection:</span>
              The water flows into rivers, lakes, oceans — or soaks into the
              ground. Then it starts all over again!
            </div>
          </li>
        </ol>
        {/*         
        <Fun fact  */}
        <div class="bg-[#FCD34D] p-4 rounded-md">
          <p>
            <span class="font-bold">Fun Fact</span>: The water you drink could
            be the same water a dinosaur once drank!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Learn;
