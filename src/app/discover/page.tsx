"use client";
import BottomNavBar from "@/components/bottomnav";
import { Media } from "@/components/media";
import { BASE_URL } from "@/utils/api";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

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
    return `${days} day${days === 1 ? "" : "s"} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours === 1 ? "" : "s"} and ${minutes % 60} minute${
      minutes % 60 === 1 ? "" : "s"
    } ago`;
  } else {
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  }
};

export default function Discover() {

  const [postData, setPostData] = useState<any>([]);
  const accessToken = Cookies.get("huesAccessToken");
  const refreshToken = Cookies.get("huesRefreshToken");

  const handleLogout = async () => {
    Cookies.remove("huesAccessToken");
    Cookies.remove("huesRefreshToken");
    window.location.href = "/login";
  };
  
  useEffect(() => {
    if (!accessToken || !refreshToken) {
      window.location.href = "/login";
    }
    fetch(BASE_URL + "/v1/feed", {
      headers: {
        "Authorization": "Bearer " + accessToken,
      },
    })
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        } else {
          fetch(BASE_URL + "/v1/refresh", {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({refresh: refreshToken})
          })
          .then((response) => {
            if (response.status == 200) {
              return response.json()
            } else {
              handleLogout()
            }
          })
          .then((tokenData) => {
            Cookies.set("huesAccessToken", tokenData.access);
            fetch(BASE_URL + "/v1/feed", {
              headers: {
                "Authorization": "Bearer " + tokenData.access,
              },
            })
            .then((response) => {
              if (response.status == 200) {
                return response.json();
              } else {
                handleLogout()
              }
            })
            .then((data) => {
              setPostData(data.posts);
            })
            .catch((response) => {
              handleLogout()
            })
          })
          .catch((response) => {
            handleLogout()
          })
        }
      })
      .then((data) => {
        if (data) setPostData(data.posts);
      })
      .catch((response) => {
        alert("Error Fetching Posts :(")
      });
  }, []);
  
  return (
    <div>
      <div className="bg-white text-slate-800 container mx-auto px-4 py-16">
        <h2 className="text-3xl mb-8 font-bold text-primary">Discover</h2>
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