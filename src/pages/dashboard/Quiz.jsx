import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

const questions = [
  {
    question: "1. What makes water rise into the sky?",
    options: [
      { text: "Clouds", correct: false },
      { text: "The Sun", correct: true },
      { text: "The Moon", correct: false },
    ],
    feedback: {
      correct:
        "Correct! The sun provides the heat energy needed for evaporation.",
      incorrect:
        "Incorrect. The Sun's heat causes water to evaporate and rise into the sky.",
    },
  },
  {
    question: "2. What is it called when water falls from clouds?",
    options: [
      { text: "Evaporation", correct: false },
      { text: "Precipitation", correct: true },
      { text: "Collection", correct: false },
    ],
    feedback: {
      correct:
        "Correct! Precipitation is when water falls from clouds as rain, snow, sleet, or hail.",
      incorrect:
        "Incorrect. Precipitation is when water falls from clouds as rain, snow, sleet, or hail.",
    },
  },
  {
    question:
      "3. Which part of the water cycle happens underground or in lakes and oceans?",
    options: [
      { text: "Condensation", correct: false },
      { text: "Collection", correct: true },
      { text: "Precipitation", correct: false },
    ],
    feedback: {
      correct:
        "Correct! Collection (also called accumulation) is when water gathers in oceans, lakes, rivers, and underground.",
      incorrect:
        "Incorrect. Collection (also called accumulation) is when water gathers in oceans, lakes, rivers, and underground.",
    },
  },
];

const WaterCycleQuiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleSelect = (isCorrect) => {
    setSelected(isCorrect);
    setShowFeedback(true);
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setShowFeedback(false);
    } else {
      setFinished(true);
    }
  };

  const progressPercent =
    ((currentQ + (finished ? 1 : 0)) / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
          <span className="text-3xl mr-2">🎮</span> Interactive Water Cycle Quiz
        </h1>

        <div className="h-3 w-full bg-blue-100 rounded mb-4">
          <div
            className="h-full bg-blue-500 rounded transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        <AnimatePresence mode="wait">
          {!finished ? (
            <motion.div
              key={currentQ}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-50 rounded-lg p-4"
            >
              <h2 className="font-bold text-lg mb-3">
                {questions[currentQ].question}
              </h2>
              <div className="space-y-2">
                {questions[currentQ].options.map((opt, oIdx) => (
                  <motion.div
                    whileTap={{ scale: 0.97 }}
                    key={oIdx}
                    onClick={() =>
                      selected === null && handleSelect(opt.correct)
                    }
                    className={`option cursor-pointer p-3 rounded-md border transition duration-150 ${
                      selected !== null && opt.correct
                        ? "bg-green-100 border-green-300"
                        : selected !== null && selected === opt.correct
                        ? "bg-red-100 border-red-300"
                        : "bg-white hover:bg-gray-100 border-gray-200"
                    }
                    `}
                  >
                    <span className="flex items-center">
                      <span className="mr-2">
                        {String.fromCharCode(65 + oIdx)}.
                      </span>{" "}
                      {opt.text}
                    </span>
                  </motion.div>
                ))}
              </div>
              {showFeedback && (
                <div
                  className={`mt-3 p-2 rounded ${
                    selected
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }
                `}
                >
                  {selected
                    ? questions[currentQ].feedback.correct
                    : questions[currentQ].feedback.incorrect}
                </div>
              )}
              {showFeedback && (
                <div className="mt-4 text-right">
                  <button
                    onClick={nextQuestion}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    {currentQ + 1 === questions.length
                      ? "Finish Quiz"
                      : "Next Question"}
                  </button>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Confetti />
              <h2 className="text-xl font-bold text-green-600">
                🎉 Great Job!
              </h2>
              <p className="text-lg mt-2">
                You scored {score} out of {questions.length}.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-6 p-4 bg-blue-100 rounded-lg">
          <h3 className="font-bold text-blue-800">Water Cycle Reminder:</h3>
          <p className="text-blue-700">
            The water cycle has four main steps: evaporation (water rises),
            condensation (clouds form), precipitation (rain falls), and
            collection (water gathers).
          </p>
        </div>
      </div>
    </div>
  );
};

export default WaterCycleQuiz;
