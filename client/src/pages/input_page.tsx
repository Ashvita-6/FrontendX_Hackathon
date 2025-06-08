import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Input: React.FC = () => {
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!url) {
      alert("Please enter a website URL");
      return;
    }

    // Redirect to Output page with URL as query param
    const encodedUrl = encodeURIComponent(url);
    navigate(`/output?site=${encodedUrl}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black p-4">
      <div className="flex flex-col items-center justify-center gap-6 bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-2xl max-w-md w-full">
        <h1 className="text-3xl font-extrabold text-white text-center">
          Analyze Your Website
        </h1>
        <p className="text-gray-300 text-center">
          Enter your website URL below to benchmark its performance and get actionable insights.
        </p>
        <input
          type="text"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={handleSearch}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition duration-300"
        >
          Analyze 🚀
        </button>
      </div>
    </div>
  );
};

export default Input;
