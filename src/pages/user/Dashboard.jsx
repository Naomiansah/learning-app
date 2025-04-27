import React, { useEffect, useState } from "react";

import { BookOpenIcon, StarIcon, TrophyIcon } from "lucide-react";
import { Link } from "react-router";
// import { apiGetProfile } from "../../services/getProfile";

export default function LearnerDashboard() {
  const [profile, setProfile] = useState();

  // function to fetch profile

  const fetchProfile = async () => {
    try {
      const response = await apiGetProfile();
      setProfile(response.data.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <main className="min-h-screen bg-blue-50 text-blue-900 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Welcome Section */}
        <div className="bg-white p-6 rounded-xl shadow flex flex-col md:flex-row items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-1">
              {/* Hi {profile.fullname}! 💧 */}
            </h2>
            <p className="italic text-blue-600">
              “Every drop counts in the world of water”
            </p>
          </div>
          <img
            src=""
            alt="Avatar"
            className="w-16 h-16 mt-4 md:mt-0 rounded-full border-2 border-blue-400"
          />
        </div>

        {/* Points and Badge Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2 flex justify-center items-center">
              <StarIcon className="mr-2" /> Sprout Points
            </h3>
            <p className="text-3xl font-bold text-blue-700">230</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2 flex justify-center items-center">
              <TrophyIcon className="mr-2" /> Current Badge
            </h3>
            <p className="text-xl text-blue-700 font-medium">Aqua Explorer</p>
          </div>
        </div>

        {/* Module Overview */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h3 className="text-2xl font-bold mb-2 flex items-center">
            <BookOpenIcon className="mr-2" /> Water Wonders
          </h3>
          <p className="text-blue-700 mb-4">
            Dive into oceans, rivers, and lakes to uncover their mysteries.
          </p>

          <div className="w-full bg-blue-100 h-4 rounded-full overflow-hidden mb-2">
            <div className="bg-blue-500 h-full" style={{ width: `60%` }} />
          </div>
          <p className="text-sm text-blue-800 mb-4">
            3 of 5 activities completed
          </p>
          <Link
            to="/lessons"
            className="mt-4 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold px-6 py-2 rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            Continue Module
          </Link>
        </div>

        {/* Fun Fact Section */}
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-xl font-semibold mb-2">💦 Water Fun Fact</h3>
          <p className="text-blue-800 italic">
            Did you know? Jellyfish are made up of 95% water!
          </p>
        </div>
      </div>
    </main>
  );
}
