import Home from '@/app/page';
import { CircleUser, HomeIcon, Search, Upload } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const BottomNavBar = () => {
  return (
    <nav className="fixed bottom-0 left-0 mt-8 w-full bg-primary p-4 flex justify-between items-center">
      <a href="/home" className="text-white">
        <div className="flex flex-col justify-center items-center">
          <HomeIcon></HomeIcon>
          <p>Home</p>
        </div>
      </a>
      <a href="/upload" className="text-white">
        <div className="flex flex-col justify-center items-center">
          <Upload></Upload>
          <p>Upload</p>
        </div>
      </a>
      <a href="/discover" className="text-white">
        <div className="flex flex-col justify-center items-center">
          <Search></Search>
          <p>Discover</p>
        </div>
      </a>
      <a href="/profile" className="text-white">
        <div className="flex flex-col justify-center items-center">
          <CircleUser></CircleUser>
          <p>Profile</p>
        </div>
      </a>
    </nav>
  );
};

export default BottomNavBar;
