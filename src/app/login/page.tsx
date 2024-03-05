"use client";
import React, { useEffect } from "react";
import AppBar from "@/components/appbar";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const axios = require("axios");
export default function LoginPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const userData = () => {
    fetch("http://43.204.116.40:443/api/v1/signup/pranavp1483@gmail.com")
      .then((response) => {
        response.headers.forEach(console.log);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getSessionData = async () => {
    if (session && session.user) {
      console.log(session);

      let response = await fetch(
        "http://43.204.116.40:443/api/v1/signup/" + session.user?.email
      );

      localStorage.setItem(
        "accessToken",
        response.headers.get("Access-Token") ?? ""
      );
      localStorage.setItem(
        "refreshToken",
        response.headers.get("Refresh-Token") ?? ""
      );
      router.push("/home");
    }
  };
  useEffect(() => {
    getSessionData();
  });
  return (
    <div className="h-screen">
      <div className="h-screen left-0">
        <div className="container mx-auto flex flex-col items-center justify-center relative w-full h-screen bg-white">
          <div className=" mx-auto">
            <img
              className="mt-10 object-cover"
              alt="Screenshot"
              src="images/logo.png"
            />
            <div className="flex items-center">
              <div className="flex-grow border-b border-gray-400"></div>
              <div className="px-4 text-gray-500">Login with</div>
              <div className="flex-grow border-b border-gray-400"></div>
            </div>
          </div>
          <button onClick={() => signIn()}>
            <img
              className="my-3 mx-auto"
              alt="Soc med"
              src="images/SocMed.png"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
