import React from "react";
import { useLocation } from "react-router-dom";

const Output: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const site = params.get("site");

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Analytics and Optimization Tips</h1>
      {site ? (
        <p>Website you submitted: <strong>{site}</strong></p>
      ) : (
        <p>No website URL provided.</p>
      )}
    </div>
  );
};

export default Output;
