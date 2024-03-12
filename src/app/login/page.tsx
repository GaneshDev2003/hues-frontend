"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/utils/api";
import Cookies from 'js-cookie';
import axios from "axios";


export default function LoginPage() {

  const router = useRouter();
  const [creds, setCreds] = useState({username: "", password: ""});
  const accessToken = Cookies.get("huesAccessToken");
  const refreshToken = Cookies.get("huesRefreshToken");

  useEffect(() => {
    if (accessToken && refreshToken) {
      window.location.href = "/home";
    }
  }, [])
  
  const signIn = () => {
    axios.post(`${BASE_URL}/v2/signin`, creds)
    .then((response) => {
      Cookies.set("huesAccessToken", response.data.access);
      Cookies.set("huesRefreshToken", response.data.refresh);
      router.push("/home");
    })
    .catch((e) => {

    });
  }

  return (
    <div className="h-screen">
      <div className="h-screen left-0">
        <div className="container mx-auto flex flex-col items-center justify-center relative w-full h-screen bg-white gap-2">
          <input type="text" placeholder="Email" value={creds.username} onChange={e => setCreds({...creds, username: e.target.value})}/>
          <input type="password" placeholder="Password" value={creds.password} onChange={e => setCreds({...creds, password: e.target.value})}/>
          <button className="p-3 bg-blue-500 text-white font-bold rounded-full" onClick={signIn}>Sign In</button>
          <a href="/forgot" className="underline text-sm">Forgot Password</a>
        </div>
      </div>
    </div>
  );
}
