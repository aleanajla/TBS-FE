// RadialProgress.js
import React from 'react';
import { cn } from "src/lib/utils";

export default function RadialProgress({ progress }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  let strokeColor;
  if (progress > 70) {
    strokeColor = "#0F9B71" //green
  } else if (progress >= 40 && progress <= 70) {
    strokeColor = "#FFA621"; // Orange
  } else {
    strokeColor = "#F64E60"; // Red
  }

  let backgroundColor; 
  if (progress > 70) {
    backgroundColor = "#E8FFF3" //green
  } else if (progress >= 40 && progress <= 70) {
    backgroundColor = "#FFF8DD"; // Orange
  } else {
    backgroundColor = "#FFF5F8"; // Red
  }

  return (
    <div className="relative">
      <svg height="100" width="100" className="transform -rotate-90">
        <circle
          r={radius}
          cx="50"
          cy="50"
          strokeWidth="10"
          stroke={backgroundColor}
          fill="transparent"
        />
        <circle
          r={radius}
          cx="50"
          cy="50"
          strokeWidth="10"
          stroke={strokeColor}
          strokeLinecap="round"
          fill="transparent"
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: offset,
          }}
        />
      </svg>
      <div className={cn('absolute top-0 left-0 w-full h-full')}>
        <div className="flex items-center justify-center h-full">
          <span className="text-lg font-medium text-gray-800">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

