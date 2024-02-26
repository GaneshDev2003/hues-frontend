"use client"
import React, { useEffect } from 'react';
import AppBar from '@/components/appbar';
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
const axios = require('axios')
const LoginPage: React.FC = () => {
const router = useRouter();
const {data: session, status} = useSession();
const getSessionData = ()=>{
  
  if(session){
    console.log(session)

    axios.get("http://localhost:8000/api/v1/signup/" + session.user?.email).then((response:Response)=>{
      localStorage.setItem("accessToken", response.headers.get("Access-Token")?? "")
      localStorage.setItem("refreshToken", response.headers.get("Access-Token")?? "")
    })
  }
}
useEffect(()=>{
  getSessionData();
})
  return (
    <div>
      <AppBar title="Login" />
      <div className="flex flex-col bg-blue-100 text-slate-800 items-center h-screen justify-center">
        <h2 className="text-2xl font-bold mb-4">Welcome to Your App</h2>
        <p className="mb-8">Please sign in to continue</p>
        <button
        onClick={() => signIn()}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;