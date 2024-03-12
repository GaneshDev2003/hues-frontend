import React from 'react';

interface AppBarProps {
  title: string;
}

const AppBar: React.FC<AppBarProps> = ({ title }) => {
  return (
    <div className="w-full h-16 bg-blue-500 flex items-center justify-center text-white text-xl font-bold fixed top-0 left-0 shadow-md z-50">
      {title}
    </div>
  );
};

export default AppBar;