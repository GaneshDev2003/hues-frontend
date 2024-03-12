import Image from "next/image";
import React from "react";

const BottomNavBar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-primary p-4 flex justify-between items-center">
      <a href="/home" className="text-white">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/home.svg"
            alt="home"
            width={20}
            height={20}
          ></Image>
          <p>Home</p>
        </div>
      </a>
      <a href="/upload" className="text-white">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/upload.svg"
            alt="home"
            width={20}
            height={20}
          ></Image>
          <p>Upload</p>
        </div>
      </a>
      <a href="/discover" className="text-white">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/discover.svg"
            alt="home"
            width={20}
            height={20}
          ></Image>
          <p>Discover</p>
        </div>
      </a>
      <a href="/profile" className="text-white">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/account.svg"
            alt="home"
            width={20}
            height={20}
          ></Image>
          <p>Profile</p>
        </div>
      </a>
    </nav>
  );
};

export default BottomNavBar;
