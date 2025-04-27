import React, { useState } from "react";
import {
  ImageIcon,
  FlaskConicalIcon,
  FileTextIcon,
  UploadIcon,
} from "lucide-react";

export default function OfflineActivityPage() {
  const [file, setFile] = useState(null);
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) setFile(selected);
  };

  const handleSubmit = () => {
    if (file || notes) {
      setSubmitted(true);
    }
  };

  

  return (
    <main className="min-h-screen bg-blue-50 text-blue-900 px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">🧪 Nature-Based Activity</h1>
        <p className="mb-4 text-blue-700 text-lg">
          Activity: <strong>Make a Mini Water Cycle in a Bag!</strong>
        </p>

        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <FlaskConicalIcon className="mr-2" /> You'll Need:
          </h3>
          <ul className="list-disc list-inside text-blue-800">
            <li>A ziplock bag</li>
            <li>A little water</li>
            <li>A permanent marker</li>
            <li>Tape</li>
            <li>A sunny window</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h3 className="text-xl font-semibold mb-2">Steps:</h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-800">
            <li>Draw a sun and clouds on the bag with your marker.</li>
            <li>Pour a little water into the bag and seal it.</li>
            <li>Tape it to a sunny window.</li>
            <li>Watch it over the next few days — what do you see?</li>
          </ol>
          <p className="mt-4 italic text-blue-700">
            (Hint: You might see mini clouds and water drops!)
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <ImageIcon className="mr-2" /> Upload Your Experiment
          </h3>
          <p className="text-blue-800 mb-2">
            📸 Take a picture of your bag and track what changes each day!
          </p>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-blue-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
          />
          {file && (
            <p className="mt-2 text-sm text-green-700">
              File selected: {file.name}
            </p>
          )}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <FileTextIcon className="mr-2" /> Write What You Observed
          </h3>
          <textarea
            className="w-full p-3 rounded-md border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:outline-none text-blue-900"
            rows="5"
            placeholder="What happened inside the bag? What surprised you?"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>

        {!submitted ? (
          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2"
            >
              <UploadIcon className="w-5 h-5" /> Submit Discovery
            </button>
          </div>
        ) : (
          <div className="mt-8 p-6 bg-green-100 text-green-800 rounded-xl text-center">
            🎉 Awesome job, scientist! You’ve completed your Water Cycle
            experiment and earned <strong>+10 Sprout Points</strong>!
          </div>
        )}
      </div>
    </main>
  );
}
