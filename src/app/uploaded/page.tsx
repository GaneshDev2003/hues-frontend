"use client";
import BottomNavBar from "@/components/bottomnav";
import { Media } from "@/components/media";
import { BASE_URL } from "@/utils/api";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { handleLogout } from '@/utils/logout';
import { AppBar } from '@mui/material';
import MyAppBar from '@/components/appbar';
import { useRouter } from 'next/navigation';


type Post = {
  answers: string[];
  description: string;
  emotions: string[];
  flagged: boolean;
  id: number;
  multimedia: string;
  timestamp: string;
  total_likes: string;
  username: String;
};

const getTimeAgo = (timestamp: string): string => {
  const now = new Date();
  const postTime = new Date(timestamp);
  const timeDiff = now.getTime() - postTime.getTime();

  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} day${days === 1 ? '' : 's'} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours === 1 ? '' : 's'} and ${minutes % 60} minute${
      minutes % 60 === 1 ? '' : 's'
    } ago`;
  } else {
    return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  }
};
export default function Discover() {
  const router = useRouter();
  const [postData, setPostData] = useState<any>([]);
  const accessToken = Cookies.get('huesAccessToken');
  const refreshToken = Cookies.get('huesRefreshToken');

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/v1/post`, {
          headers: {
            "Authorization": `Bearer ${accessToken}`,
          },
        });
  
        if (response.status === 200) {
          setPostData(response.data.posts);
        } else {
          const refreshResponse = await axios.post(`${BASE_URL}/v1/refresh`, {
            refresh: refreshToken
          }, {
            headers: {
              "Content-Type": "application/json"
            }
          });
  
          if (refreshResponse.status === 200) {
            Cookies.set("huesAccessToken", refreshResponse.data.access);
            const newResponse = await axios.get(`${BASE_URL}/v1/post`, {
              headers: {
                "Authorization": `Bearer ${refreshResponse.data.access}`,
              },
            });
  
            if (newResponse.status === 200) {
              setPostData(newResponse.data.posts);
            } else {
              handleLogout();
            }
          } else {
            handleLogout();
          }
        }
      } catch (error) {
        handleLogout();
        console.error("Error fetching posts:", error);
      }
    };
  
    fetchData();

  }, []);

  return (
    <div>
      <div className="bg-white text-slate-800 container mx-auto px-4 py-8">
        <MyAppBar
          title="Your Posts"
          onBackButtonClick={() => router.back()}
        ></MyAppBar>
        <div className="flex flex-wrap">
          {postData.map((post: Post, index: number) => (
            <div
              key={index}
              className="shadow-md rounded-lg w-full p-4 bg-primary/20 my-2"
            >
              <Media mediaUrl={post.multimedia}></Media>
              <div className="border-t border-slate-300 my-2"></div>
              <p className="font-bold text-gray-600">
                {getTimeAgo(post.timestamp)}
              </p>
              <p className="">{post.description}</p>
            </div>
          ))}
        </div>
      </div>
      <BottomNavBar></BottomNavBar>
    </div>
  );
}
