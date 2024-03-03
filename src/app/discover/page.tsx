import BottomNavBar from "@/components/bottomnav";
import React from "react";

export default function Discover() {
  const images = [
    "https://via.placeholder.com/500",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ];
  return (
    <div>
      <div className="bg-white text-slate-800 container mx-auto px-4 py-16">
        <div className="flex flex-wrap">
          {images.map((image, index) => (
            <div key={index} className="w-1/2">
              <img src={image} alt={`Image ${index}`} className="w-full" />
            </div>
          ))}
        </div>
      </div>
      <BottomNavBar></BottomNavBar>
    </div>
  );
}
