import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";

// A simple loading spinner component
const Loader: React.FC<{ status: string }> = ({ status }) => (
  <div className="flex flex-col items-center justify-center text-center p-8">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-4"></div>
    <p className="text-xl font-semibold text-white">Analyzing...</p>
    <p className="text-gray-400 mt-2">{status}</p>
  </div>
);

const Output: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const siteUrl = params.get("site");

  // State to manage the process
  const [analysis, setAnalysis] = useState<string>("");
  const [loadingStatus, setLoadingStatus] = useState<string>("Starting analysis...");
  const [error, setError] = useState<string | null>(null);

  const apiBaseUrl = "http://localhost:3001/api";

  useEffect(() => {
    if (!siteUrl) {
      setError("No website URL was provided.");
      setLoadingStatus("");
      return;
    }

    const fetchAnalysis = async () => {
      try {
        setError(null);

        // Step 1: Get PageSpeed Data
        setLoadingStatus(`Fetching performance data for ${siteUrl}... (This may take a minute)`);
        const pagespeedResponse = await axios.post(`${apiBaseUrl}/get-pagespeed-data`, {
          url: siteUrl,
        });

        const pagespeedData = pagespeedResponse.data;

        if (pagespeedData.error) {
          throw new Error(pagespeedData.error.message || "Failed to fetch from Google PageSpeed.");
        }

        // Step 2: Get AI Analysis
        setLoadingStatus("Data received. Sending to AI for analysis...");
        const analysisResponse = await axios.post(`${apiBaseUrl}/get-analysis`, {
          pagespeedData: pagespeedData,
        });

        setAnalysis(analysisResponse.data.analysis);
        setLoadingStatus(""); // Clear loading status on success
      } catch (err: any) {
        console.error("Analysis failed:", err);
        const errorMessage = err.response?.data?.error || err.message || "An unknown error occurred.";
        setError(`Analysis Failed: ${errorMessage}`);
        setLoadingStatus("");
      }
    };

    fetchAnalysis();
  }, [siteUrl, apiBaseUrl]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Performance Analysis Report</h1>
        <p className="text-blue-400 break-words mb-8">
          Results for: <strong>{siteUrl}</strong>
        </p>

        {loadingStatus && <Loader status={loadingStatus} />}

        {error && (
          <div
            className="bg-red-900 border border-red-500 text-red-200 px-4 py-3 rounded-lg relative"
            role="alert"
          >
            <strong className="font-bold">Error! </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {analysis && (
          <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-white prose-strong:text-white prose-a:text-blue-400 prose-code:text-pink-400 prose-code:bg-gray-800 prose-code:p-1 prose-code:rounded-md prose-pre:bg-gray-800 prose-pre:p-4 prose-pre:rounded-lg">
            <ReactMarkdown>{analysis}</ReactMarkdown>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            to="/input"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Analyze Another Site
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Output;
