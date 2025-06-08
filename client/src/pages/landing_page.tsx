import React from "react";
import { useNavigate } from "react-router-dom";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/input");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-purple-200 text-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Landing Page</h1>
      <p className="text-lg text-gray-600 max-w-xl mb-6">
        This is a dummy landing page. Click below to get started with your journey.
      </p>

      <button
        onClick={handleGetStarted}
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl shadow-md transition"
      >
        Get Started
      </button>
    </div>
  );
};

export default Landing;
