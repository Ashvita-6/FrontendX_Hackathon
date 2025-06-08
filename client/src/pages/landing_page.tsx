import React from "react";
import { useNavigate } from "react-router-dom";

const RadialPatternWithRadar = () => {
  const numLines = 7;
  const numCircles = 5;
  const trailAngle = 120;

  const lines = Array.from({ length: numLines }, (_, i) => {
    const lineAngle = (Math.PI * i) / (numLines - 1);
    const x2 = 200 + Math.cos(lineAngle) * 400;
    const y2 = 300 - Math.sin(lineAngle) * 400;
    return { x2, y2 };
  });

  return (
    <div className="absolute inset-0 z-0">
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {Array.from({ length: numCircles }, (_, i) => (
            <radialGradient
              key={`gradient-${i}`}
              id={`gradient-${i}`}
              cx="50%"
              cy="100%"
              r="100%"
            >
              <stop
                offset="0%"
                stopColor="rgb(255, 140, 0)"
                stopOpacity={0.2 - i * 0.03}
              />
              <stop
                offset="100%"
                stopColor="rgb(139, 69, 19)"
                stopOpacity={0.15 - i * 0.02}
              />
            </radialGradient>
          ))}
          <linearGradient
            id="sweepGradient"
            gradientUnits="userSpaceOnUse"
            x1="200"
            y1="0"
            x2={200 - Math.sin(trailAngle * Math.PI / 180) * 300}
            y2={300 - Math.cos(trailAngle * Math.PI / 180) * 300}
          >
            <stop offset="0%" stopColor="rgb(255, 140, 0)" stopOpacity="0.8" />
            <stop offset="50%" stopColor="rgb(255, 140, 0)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Lines */}
        {lines.map((line, i) => (
          <line
            key={`line-${i}`}
            x1="200"
            y1="300"
            x2={line.x2}
            y2={line.y2}
            stroke="white"
            strokeOpacity="0.1"
            strokeWidth="1"
          />
        ))}

        {/* Circles */}
        {Array.from({ length: numCircles }, (_, i) => {
          const radius = ((i + 1) * 300) / numCircles;
          return (
            <path
              key={`circle-${i}`}
              d={`M ${200 - radius} 300 A ${radius} ${radius} 0 0 1 ${200 + radius} 300`}
              fill={`url(#gradient-${i})`}
            />
          );
        })}

        {/* Radar Sweep */}
        <g
          style={{
            transformOrigin: "200px 300px",
            transform: "rotate(-90deg)",
            animation: "radarSpin 2s linear infinite",
          }}
        >
          <path
            d={`M 200 300 
                 L 200 0 
                 A 300 300 0 0 0 ${200 - Math.sin(trailAngle * Math.PI / 180) * 300} ${300 - Math.cos(trailAngle * Math.PI / 180) * 300}
                 Z`}
            stroke="none"
            fill="url(#sweepGradient)"
          />
        </g>

        <style>
          {`
            @keyframes radarSpin {
              from { transform: rotate(-90deg); }
              to { transform: rotate(90deg); }
            }
          `}
        </style>
      </svg>
    </div>
  );
};

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/input");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Background radar */}
      <RadialPatternWithRadar />

      {/* Foreground content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Benchmark Your Website's Performance
        </h1>
        <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-md">
          Analyze your website's frontend performance. Get actionable insights and optimization tips to improve your site's speed and user experience.
        </p>
        <button
          onClick={handleGetStarted}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg text-base font-semibold transition"
        >
          Get Started 🚀
        </button>
      </div>
    </div>
  );
};

export default Landing;
