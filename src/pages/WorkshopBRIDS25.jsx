import React from "react";

const WorkshopBRIDS25 = () => {
  return (
    <div className="mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-yellow-400 text-center">
        WORKSHOP ON BRIDS'25
      </h1>
      <h2 className="text-xl font-semibold text-center mt-2">Workshop: BRIDS 25</h2>
      <p className="text-lg text-center mt-2">
        Conducted by: Dr. Praveen Kumar Sharma, Ph.D. (NIT Durgapur)
      </p>
      <p className="mt-4 text-center">
        Join us for an insightful BRIDS 25 workshop led by Dr. Praveen Kumar Sharma, a renowned Ph.D. holder from NIT Durgapur. This workshop will cover key concepts, latest research developments, and practical applications related to BRIDS 25, offering participants a unique learning experience.
      </p>

      <div className="mt-4">
        <h2 className="text-xl font-bold text-red-500">Workshop Highlights:</h2>
        <ul className="list-disc list-inside mt-2">
          <li>✅ Expert insights from Dr. Praveen Kumar Sharma</li>
          <li>✅ In-depth discussions on BRIDS 25 and its applications</li>
          <li>✅ Hands-on learning and interactive sessions</li>
          <li>✅ Certificate of Participation for all attendees</li>
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-bold text-blue-400">📅 Date: 21-22 FEB 2025</h2>
        <h2 className="text-xl font-bold text-green-400">📍 Venue: JASHAN HALL</h2>
        <h2 className="text-xl font-bold text-purple-400">🔹 Who should attend? Students of JEC</h2>
      </div>

<a href="https://e-ticket-srt.netlify.app/form/67a8f851eb4ebb3b772d8be8">
      <button
      className="px-6 py-3 rounded-lg text-white font-bold text-lg bg-gray-700 hover:bg-gray-600 transition-all duration-300 shadow-lg mt-2 cursor-pointer"
    >
      Enroll Now
    </button>
    </a>
      <div className="mt-4 text-center">
        <h2 className="text-xl font-bold text-yellow-400">📢 Limited seats available! Register now to secure your spot.</h2>
        <p className="mt-2">For registration and inquiries, contact: +91 6352433898</p>
      </div>
    </div>
  );
};

export default WorkshopBRIDS25;
