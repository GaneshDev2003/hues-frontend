'use client';
import { Flame } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
interface AppBarProps {
  title: string;
  onBackButtonClick?: () => void;
}

const MyAppBar: React.FC<AppBarProps> = ({ title, onBackButtonClick }) => {
  const [streak, setStreak] = useState<string>('0');
  useEffect(() => {
    setStreak(Cookies.get('currentStreak') ?? '0');
  }, []);
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 flex items-center justify-between">
        {onBackButtonClick && (
          <button
            onClick={onBackButtonClick}
            className="font-semibold text-textcolor py-2 text-xl border border-white rounded inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}
        <div className="text-3xl font-bold text-textcolor">{title}</div>
        <div className="flex items-center text-orange-800">
          <Flame color="orange" scale={2} />
          <p>{streak}</p>
        </div>
      </div>
    </div>
  );
};

export default MyAppBar;
