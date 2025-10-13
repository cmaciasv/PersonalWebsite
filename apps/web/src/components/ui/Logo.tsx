import React from 'react';

const Logo: React.FC = () => {
  return (
    <div style={{ perspective: '200px' }}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin-slow"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <style>
          {`
            @keyframes spin {
              from {
                transform: rotateY(0deg);
              }
              to {
                transform: rotateY(360deg);
              }
            }
            .animate-spin-slow {
              animation: spin 5s linear infinite;
            }
            .animate-spin-slow:hover {
              animation-play-state: paused;
            }
          `}
        </style>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontSize="28"
          fill="var(--primary)"
          fontFamily="var(--font-mono)"
        >
          CM
        </text>
      </svg>
    </div>
  );
};

export default Logo;
