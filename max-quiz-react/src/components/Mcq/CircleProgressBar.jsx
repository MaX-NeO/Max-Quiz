import React from 'react';

const CircleProgressBar = ({ time }) => {
  const circumference = 2 * Math.PI * 60;
  const progressPercentage = (time / 10) * 100; 

  return (

    // 72 145 145 120 
    // 36 72 72 60 -W
    // 30 60 60 58 - N/W
    <div className="flex items-center justify-center">
      <svg className="transform -rotate-90 w-36 h-36">
        <circle
          cx="72"
          cy="72"
          r="60"
          stroke="currentColor"
          strokeWidth="10"
          fill="transparent"
          className="text-orange-100"
        />
        <circle
          cx="72"
          cy="72"
          r="60"
          stroke="currentColor"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (circumference * progressPercentage) / 100}
          className="text-orange-500"
        />
      </svg>
      <span className="absolute text-5xl">{`${time}`}</span>
    </div>
  );
};

export default CircleProgressBar;
