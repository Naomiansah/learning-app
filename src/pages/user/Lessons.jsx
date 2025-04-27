import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, CheckCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";
import OfflineActivityPage from "./Offlineactivity";

export default function ActivityPage() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const activity = {
    title: "The Water Cycle",
    intro: "Let’s explore how water travels through our planet!",
    progress: 60,
    videoUrl: "https://www.youtube.com/embed/IO9tT186mZw",
    quizQuestion: "What is the stage where water vapor turns into clouds?",
    options: ["Evaporation", "Condensation", "Precipitation"],
    answer: "Condensation",
  };

  const handleOptionClick = (option) => {
    if (isAnswered) return; // Prevent changes after answer
    setSelectedOption(option);
    setIsAnswered(true);
    setIsCorrect(option === activity.answer);
  };

  const handleRetry = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(false);
  };

  const handleNext = () => {
    navigate("/dashboard");
  };

  return (
    <main className="min-h-screen bg-blue-50 text-blue-900 px-6 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="w-full bg-blue-100 h-3 rounded-full overflow-hidden mb-6">
          <div
            className="bg-blue-500 h-full"
            style={{ width: `${activity.progress}%` }}
          />
        </div>

        {/* Title and Intro */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center">
            <BookOpen className="mr-2" /> {activity.title}
          </h1>
          <p className="text-blue-700 italic">{activity.intro}</p>
        </div>

        {/* Activity Content - Video */}
        <div className="mb-8">
          <iframe
            width="100%"
            height="315"
            src={activity.videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-md"
          ></iframe>
        </div>

        {/* Interactive Quiz */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-10">
          <h3 className="text-xl font-semibold mb-4">🌧️ Quiz Time!</h3>
          <p className="mb-4">{activity.quizQuestion}</p>
          <ul className="space-y-3">
            {activity.options.map((option, i) => (
              <li
                key={i}
                onClick={() => handleOptionClick(option)}
                className={`px-4 py-2 rounded-lg cursor-pointer text-blue-800 border transition duration-200 ${
                  selectedOption === option
                    ? isCorrect && isAnswered
                      ? "bg-green-100 border-green-400"
                      : !isCorrect && isAnswered
                      ? "bg-red-100 border-red-400"
                      : ""
                    : "bg-blue-100 hover:bg-blue-200 border-blue-200"
                } ${isAnswered ? "pointer-events-none" : ""}`}
              >
                {option}
              </li>
            ))}
          </ul>

          {isAnswered && (
            <div className="mt-4">
              <p
                className={`font-medium ${
                  isCorrect ? "text-green-600" : "text-red-600"
                }`}
              >
                {isCorrect
                  ? "✅ Correct! Great job!"
                  : `❌ Oops! The correct answer is "${activity.answer}".`}
              </p>
              <button
                onClick={handleRetry}
                className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-1 rounded-full"
              >
                Try Again
              </button>
            </div>
          )}
        </div>

        {/* Navigation Button */}
        <div className="text-center">
          <Link
            to="/offlineactivity"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full flex items-center gap-2"
          >
            <CheckCircleIcon className="w-5 h-5" />
            Mark as Complete
          </Link>
        </div>
      </div>
    </main>
  );
}
