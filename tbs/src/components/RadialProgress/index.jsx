// RadialProgress.js
import React from 'react';
import { cn } from "src/lib/utils";

export default function RadialProgress ({ progress }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative">
      <svg height="100" width="100" className="transform -rotate-90">
        <circle
          r={radius}
          cx="50"
          cy="50"
          strokeWidth="10"
          stroke="#E8FFF3"
          fill="transparent"
        />
        <circle
          r={radius}
          cx="50"
          cy="50"
          strokeWidth="10"
          stroke="#0F9B71"
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

