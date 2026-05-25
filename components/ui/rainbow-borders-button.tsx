'use client';

import React from 'react';

interface RainbowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const RainbowButton = ({ children, onClick, className = '' }: RainbowButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`rainbow-border relative px-8 py-4 bg-black rounded-lg border-none text-white cursor-pointer font-semibold transition-all duration-200 hover:shadow-lg ${className}`}
      >
        {children}
      </button>

      <style jsx>{`
        .rainbow-border::before,
        .rainbow-border::after {
          content: '';
          position: absolute;
          left: -2px;
          top: -2px;
          border-radius: 10px;
          background: linear-gradient(
            45deg,
            #fb0094,
            #0000ff,
            #00ff00,
            #ffff00,
            #ff0000,
            #fb0094,
            #0000ff,
            #00ff00,
            #ffff00,
            #ff0000
          );
          background-size: 400%;
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          z-index: -1;
          animation: rainbow 20s linear infinite;
        }
        .rainbow-border::after {
          filter: blur(50px);
        }
        @keyframes rainbow {
          0% {
            background-position: 0 0;
          }
          50% {
            background-position: 400% 0;
          }
          100% {
            background-position: 0 0;
          }
        }
      `}</style>
    </>
  );
};
