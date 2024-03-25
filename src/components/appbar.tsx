'use client';
import { ArrowLeft, Flame } from 'lucide-react';
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
      <div className="max-w-7xl mx-auto py-3 flex items-center justify-between">
        {onBackButtonClick && (
          <button
            onClick={onBackButtonClick}
            className="font-semibold text-textcolor py-2 text-xl border border-white rounded inline-flex items-center"
          >
            <ArrowLeft></ArrowLeft>
          </button>
        )}
        <div className="text-3xl font-bold text-textcolor">{title}</div>
        <div className="flex items-center text-orange-800">
          {(streak == '0') && <Flame color="orange" scale={2}/>}
          {(streak !== '0') && <Flame color="orange" scale={2} fill="orange"/>}
          <p>{streak}</p>
        </div>
      </div>
    </div>
  );
};

export default MyAppBar;
