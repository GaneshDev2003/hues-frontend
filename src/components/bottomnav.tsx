import React from 'react';

const BottomNavBar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-primary p-4 flex justify-between items-center">
      <a href="/home" className="text-white">
        Home
      </a>
      <a href="/upload" className="text-white">
        Upload
      </a>
      <a href="#" className="text-white">
        Profile
      </a>
    </nav>
  );
};

export default BottomNavBar;