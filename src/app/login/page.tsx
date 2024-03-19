"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSession, signIn, useSession } from "next-auth/react";
import { BASE_URL } from "@/utils/api";
import Cookies from "js-cookie";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    const getSessionData = async () => {
      if (session && session.user) {
        try {
          const response = await axios.post(
            `${BASE_URL}/v1/user`,
            { email: session.user.email }
          );

          Cookies.set("huesAccessToken", response.data.access);
          Cookies.set("huesRefreshToken", response.data.refresh);

          // Redirect to home page after successful login
          router.push("/home");
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    getSessionData();
  }, [session, router]);

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
