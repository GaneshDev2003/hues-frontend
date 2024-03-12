"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/utils/api";
import axios from "axios";


export default function SignupPage() {

  const router = useRouter();
  const [creds, setCreds] = useState({username: "", password: "", repassword: ""});
  
  const signUp = () => {
    if (creds.password == creds.repassword) {
        axios.post(`${BASE_URL}/v2/signup`, creds)
        .then((response) => {
        router.push("/login");
        })
        .catch((e) => {

        });
    } else {
        alert("Passwords do not Match");
    }
  }

  return (
    <div className="h-screen">
      <div className="h-screen left-0">
        <div className="container mx-auto flex flex-col items-center justify-center relative w-full h-screen bg-white gap-2">
          <input type="text" placeholder="Email" value={creds.username} onChange={e => setCreds({...creds, username: e.target.value})}/>
          <input type="password" placeholder="Password" value={creds.password} onChange={e => setCreds({...creds, password: e.target.value})}/>
          <input type="password" placeholder="Confirm Password" value={creds.repassword} onChange={e => setCreds({...creds, repassword: e.target.value})}/>
          <button className="p-3 bg-blue-500 text-white font-bold rounded-full" onClick={signUp}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}