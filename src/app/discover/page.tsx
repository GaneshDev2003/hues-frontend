"use client";
import BottomNavBar from "@/components/bottomnav";
import { Media } from "@/components/media";
import { setRef } from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
type User = {
  email: string;
  id: number;
  joinedOn: string;
  lastPostTime: string;
  maxStreak: number;
  streak: number;
};
type Post = {
  answers: string[];
  description: string;
  emotions: string[];
  flagged: boolean;
  id: number;
  multimedia: string;
  timestamp: string;
  total_likes: string;
  user: User;
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
  const [accessToken, setAccessToken] = useState<string | null>();
  const [refreshToken, setRefreshToken] = useState<string | null>();

  useEffect(() => {
    setAccessToken(localStorage.getItem("accessToken"));
    setRefreshToken(localStorage.getItem("refreshToken"));
  });
  const [postData, setPostData] = useState<any>([]);
  let posts: any[] = [];
  const getPostData = async () => {};
  useEffect(() => {
    fetch("http://43.204.116.40:443/api/v1/feed/latest", {
      headers: {
        "Content-Type": "application/json",
        "Access-Token": accessToken ?? "",
        "Refresh-Token": refreshToken ?? "",
      },
    })
      .then((response) => response.json())
      .then((data: Post[]) => {
        console.log("posts ", data);
        let sortedPosts = data.sort(
          (a: Post, b: Post) =>
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );
        setPostData(data);
      });
    console.log("posts ", posts);
  }, []);
  const images = [
    "https://via.placeholder.com/500",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ];
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

// export default function Page() {
//   return (
//     <Suspense fallback={<div>Loading....</div>}>
//       <Discover></Discover>
//     </Suspense>
//   );
// }
