"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/utils/api";
import axios from "axios";


export default function ForgotPasswordPage() {

  const router = useRouter();
  const [creds, setCreds] = useState({email: ""});
  
  const sendEmail = () => {
    axios.get(`${BASE_URL}/v1/reset?email=${creds.email}`)
    .then((response) => {
        setCreds({email: ""});
        alert("Email sent")
    })
    .catch((e) => {

    });
    
  }

  return (
    <div className="h-screen">
      <div className="h-screen left-0">
        <div className="container mx-auto flex flex-col items-center justify-center relative w-full h-screen bg-white gap-2">
          <input type="text" placeholder="Email" value={creds.email} onChange={e => setCreds({...creds, email: e.target.value})}/>
          <button className="p-3 bg-blue-500 text-white font-bold rounded-full" onClick={sendEmail}>Send Email</button>
        </div>
      </div>
    </div>
  );
}