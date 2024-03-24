'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { Divider } from '@mui/material';
import { useRouter } from 'next/navigation';
import BottomNavBar from '@/components/bottomnav';
import Cookies from 'js-cookie';
import { signOut } from 'next-auth/react';
import { FormInput, ImageIcon, Mail } from 'lucide-react';

const ProfilePage = () => {
  const router = useRouter();
  const accessToken = Cookies.get('huesAccessToken');
  const refreshToken = Cookies.get('huesRefreshToken');

  const handleLogout = async () => {
    await signOut();
    Cookies.remove('huesAccessToken');
    Cookies.remove('huesRefreshToken');
    window.location.href = '/login';
  };

  useEffect(() => {
    if (!accessToken || !refreshToken) {
      window.location.href = '/login';
    }
  });

  return (
    <div>
      <div className="bg-white text-slate-800 container mx-auto px-4 py-16 h-screen">
        <div className="items-center">
          <span>
            <h2 className="font-bold text-primary text-2xl mr-3">Your Account</h2>
            <span className=" text-textsecondary">
              Express your emotions creatively!
            </span>
          </span>
          <div className="mt-10">
            <a href="/uploaded">
              <div className="flex flex-row items-center my-2">
                <ImageIcon></ImageIcon>
                <h3 className="font-semibold text-xl mx-3">Your Posts</h3>
              </div>
            </a>
            <Divider></Divider>
            <a href="/feedback">
              <div className="flex flex-row items-center my-2">
                <FormInput></FormInput>
                <h3 className="font-semibold text-xl mx-3">Give Feedback</h3>
              </div>
            </a>
            <Divider></Divider>

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
