"use client";
import BottomNavBar from "@/components/bottomnav";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const PostsPage = () => {
  const router = useRouter();
  const accessToken = Cookies.get("huesAccessToken");
  const refreshToken = Cookies.get("huesRefreshToken");

  useEffect(() => {
    if (!accessToken || !refreshToken) {
      window.location.href = "/login";
    }
  })
  
  return (
    <div>
      <div className="bg-white text-slate-800 container mx-auto px-4 py-16">
        <div
          className="bg-cover flex flex-col items-center justify-items-center rounded-lg shadow-md py-10 items-center my-4"
          style={{ backgroundImage: 'url("images/upload-bg.png")' }}
        >
          <h2 className="text-xl font-bold text-white">Hey There!</h2>
          <h3 className="font-bold text-white">How are you feeling today?</h3>
          <h3 className="font-bold text-white">
            Time to be creative about it!
          </h3>
          <button
            onClick={() => router.push("/upload")}
            className="text-white my-10 bg-primary/40 hover:bg-primary/70 focus:ring-4 focus:ring-primary/40 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Add a new post
          </button>
        </div>
        <h1 className="text-textcolor font-bold my-2 text-2xl">
          Creativity Catalogue
        </h1>
        <div className="grid grid-cols-2 gap-4 flex flex-col align-center">
          <a href="/categories/music">
            <div className="flex border-2 border-secondary flex-row items-center justify-center p-2 rounded-xl">
              <img src="images/music.png"></img>
              <h3 className="text-textcolor font-bold">Music</h3>
            </div>
          </a>
          <a href="/categories/writing">
            <div className="flex border-2 border-secondary flex-row items-center justify-center p-2 rounded-xl">
              <h3 className="text-textcolor font-bold">Writing</h3>
              <img src="images/writing.png"></img>
            </div>
          </a>

          <a href="/categories/art">
            <div className="flex border-2 border-secondary flex-row items-center justify-center p-2 rounded-xl">
              <img src="images/drawing.png"></img>
              <h3 className="text-textcolor font-bold">Drawing and Painting</h3>
            </div>
          </a>

          <a href="/categories/dancing">
            <div className="flex border-2 border-secondary flex-row items-center justify-center p-2 rounded-xl">
              <h3 className="text-textcolor font-bold">Dancing</h3>
              <img src="images/dancing.png"></img>
            </div>
          </a>

          <a href="/categories/theatre">
            <div className="flex border-2 border-secondary flex-row items-center justify-center p-2 rounded-xl">
              <h3 className="text-textcolor font-bold">Theatre</h3>
              <img src="images/theatre.png"></img>
            </div>
          </a>
        </div>
      </div>
      <BottomNavBar></BottomNavBar>
    </div>
  );
};

export default PostsPage;
