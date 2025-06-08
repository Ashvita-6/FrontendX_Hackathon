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
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-gray-100 p-4">
      <h1 className="text-2xl font-bold">Enter Website URL</h1>
      <input
        type="text"
        placeholder="Enter website URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="border p-2 w-80 rounded shadow"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
};

export default Input;
