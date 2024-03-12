"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Divider } from "@mui/material";
import { useRouter } from "next/navigation";
import BottomNavBar from "@/components/bottomnav";
import Cookies from "js-cookie";

const ProfilePage = () => {

  const router = useRouter();
  const accessToken = Cookies.get("huesAccessToken");
  const refreshToken = Cookies.get("huesRefreshToken");

  const handleLogout = async () => {
    Cookies.remove("huesAccessToken");
    Cookies.remove("huesRefreshToken");
    window.location.href = "/login";
  };

  useEffect(() => {
    if (!accessToken || !refreshToken) {
      window.location.href = "/login";
    }
  })

  return (
    <div>
      <div className="bg-white text-slate-800 container mx-auto px-4 py-16 h-screen">
        <div className="items-center">
          <span>
            <h2 className="font-bold text-2xl mr-3">Your Account</h2>
            <span className=" text-textsecondary">
              Express your emotions creatively!
            </span>
          </span>
          <div className="mt-10">
            <a href="/uploaded">
              <div className="my-2">
                <Image
                  alt="Posts"
                  src="/images/posts.svg"
                  width={20}
                  height={20}
                  className="inline"
                ></Image>
                <h3 className="inline font-semibold text-xl mx-3">Posts</h3>
              </div>
            </a>
            <Divider></Divider>
            <div className="my-2">
              <Image
                alt="Posts"
                src="/images/support.svg"
                width={20}
                height={20}
                className="inline"
              ></Image>
              <h3 className="inline font-semibold text-xl mx-3">Support</h3>
            </div>
            <Divider></Divider>
            <div className="my-2">
              <Image
                alt="Posts"
                src="/images/contactus.svg"
                width={20}
                height={20}
                className="inline"
              ></Image>
              <h3 className="inline font-semibold text-xl mx-3">Contact Us</h3>
            </div>
            <button
              onClick={handleLogout}
              className="w-full mx-auto mt-3 bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Log out
            </button>
          </div>
        </div>
        <BottomNavBar></BottomNavBar>
      </div>
    </div>
  );
};

export default ProfilePage;
