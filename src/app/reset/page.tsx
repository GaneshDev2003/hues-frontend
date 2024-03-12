"use client";
import React, { Suspense, useState } from "react";
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/utils/api";
import { useSearchParams } from "next/navigation";
import axios from "axios";

function ResetPasswordPage() {

  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const router = useRouter();
  const [data, setData] = useState({token: token, new_password: "", repassword: ""});
  
  const resetPassword = () => {
    if (data.new_password == data.repassword) {
        axios.post(`${BASE_URL}/v1/reset`, data)
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
          <h1>Enter New Password</h1>
          <input type="password" placeholder="Password" value={data.new_password} onChange={e => setData({...data, new_password: e.target.value})}/>
          <input type="password" placeholder="Confirm Password" value={data.repassword} onChange={e => setData({...data, repassword: e.target.value})}/>
          <button className="p-3 bg-blue-500 text-white font-bold rounded-full" onClick={resetPassword}>Reset Password</button>
        </div>
      </div>
    </div>
  );
}

export default function ResetPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ResetPasswordPage/>
        </Suspense>
    )
}