import { ActivityIcon, AwardIcon, PuzzleIcon } from "lucide-react";
import React from "react";
import hyyer from "../../assets/images/hyyer.png";

const Howorks = () => {
  return (
    // How it works section
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
          Here's how SkillSprout sparks curiosity and growth in every learner.
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
            <h3 className="font-semibold text-xl mb-2">Earn Sprout Points</h3>
            <p className="text-sm text-black">
              Level up and unlock nature badges!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Howorks;
