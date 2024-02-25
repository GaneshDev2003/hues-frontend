"use client"
import React from 'react';
import AppBar from '@/components/appbar';
import { useSession } from 'next-auth/react';

const ProfilePage = () => {
    const {data:session} = useSession();
  return (
    <div>
      <AppBar title="Profile" />
      <div className="container h-screen bg-blue-100 text-slate-800 mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold mb-8">{session?.user?.name}'s Profile</h1>
        <div className="flex justify-center items-center h-64">
          <p className="text-xl">You have no posts yet.</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;