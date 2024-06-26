'use client';
import BottomNavBar from '@/components/bottomnav';
import { Media } from '@/components/media';
import { BASE_URL } from '@/utils/api';
import React, { useEffect, useState, useRef } from 'react';
import Cookies from 'js-cookie';
import '@/utils/api';
import axios from 'axios';
import MyAppBar from '@/components/appbar';
import { useRouter } from 'next/navigation';
import { Heart } from 'lucide-react';

type Post = {
  answers: string[];
  description: string;
  emotions: string[];
  flagged: boolean;
  id: number;
  multimedia: string;
  timestamp: string;
  emoji: string;
  username: String;
  display: boolean;
  reactions: {[key: string]: number};
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
  const [postData, setPostData] = useState<Post[]>([]);
  const [morePosts, setMorePosts] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef(null);
  const accessToken = Cookies.get('huesAccessToken');
  const refreshToken = Cookies.get('huesRefreshToken');
  const handleLogout = async () => {
    Cookies.remove('huesAccessToken');
    Cookies.remove('huesRefreshToken');
    window.location.href = '/login';
  };
  // make a list of likes that is a copy of the likes field in postData
  const likePost = async (index: number) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/v1/like`,
        {post: postData[index].id, emoji: "1F604"},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
  
      if (response.status === 204) {
        console.log('Post liked successfully');
        setPostData(prevData => {
          const newData = [...prevData];
          if (newData[index].emoji === "") newData[index].emoji = "1F604";
          else newData[index].emoji = "";
          return newData;
        })
      } else {
        console.log('Failed to like post');
      }
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };
  
  useEffect(() => {
    if (!accessToken || !refreshToken) {
      window.location.href = '/login';
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/v1/feed`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.status === 200) {
          setPostData(response.data.posts);
        } else {
          const refreshResponse = await axios.post(
            `${BASE_URL}/v1/refresh`,
            {
              refresh: refreshToken,
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            },
          );

          if (refreshResponse.status === 200) {
            Cookies.set('huesAccessToken', refreshResponse.data.access);
            const newResponse = await axios.get(`${BASE_URL}/v1/feed`, {
              headers: {
                Authorization: `Bearer ${refreshResponse.data.access}`,
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
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [accessToken, refreshToken]);

  const fetchMorePosts = async (postId: number, timestamp: string) => {
    setIsLoading(true);
    const response = await axios.post(
      `${BASE_URL}/v1/feed`,
      { postId: postId, timestamp: timestamp },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    if (response.status === 200) {
      if (response.data.posts.length === 0) {
        setMorePosts(false);
      } else {
        setPostData((prevData) => [...prevData, ...response.data.posts]);
      }
      setIsLoading(false);
    } else {
      const refreshResponse = await axios.post(
        `${BASE_URL}/v1/refresh`,
        {
          refresh: refreshToken,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (refreshResponse.status === 200) {
        Cookies.set('huesAccessToken', refreshResponse.data.access);
        const newResponse = await axios.get(`${BASE_URL}/v1/feed`, {
          headers: {
            Authorization: `Bearer ${refreshResponse.data.access}`,
          },
        });
        if (newResponse.status === 200) {
          if (response.data.posts.length === 0) {
            setMorePosts(false);
          } else {
            setPostData((prevData) => [...prevData, ...response.data.posts]);
          }
          setIsLoading(false);
        } else {
          handleLogout();
        }
      } else {
        handleLogout();
      }
    }
  };

  const callMorePostFn: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        morePosts &&
        !isLoading &&
        postData.length !== 0
      ) {
        fetchMorePosts(
          postData.slice(-1)[0].id,
          postData.slice(-1)[0].timestamp,
        );
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    const observer = new IntersectionObserver(callMorePostFn, options);
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [morePosts, isLoading, postData]);

  return (
    <div>
      <div className="bg-white text-slate-800 container mx-auto px-4 py-8 mb-14">
        <MyAppBar
          onBackButtonClick={() => router.back()}
          title="Discover"
        ></MyAppBar>
        <div className="flex flex-wrap mb-16">
          {postData.map((post: Post, index: number) => (
            <div
              key={index}
              className="shadow-md rounded-lg w-full p-4 bg-primary/20 my-2"
            >
              {/* <Media mediaUrl={post.multimedia}></Media> */}
              <div className="flex items-center justify-center w-full">
                {!post.multimedia.endsWith('mp4') && (
                  <img src={post.multimedia} alt="Media" />
                )}
                {post.multimedia.endsWith('mp4') && (
                  <video autoPlay loop>
                    <source src={post.multimedia} type="video/mp4" />
                  </video>
                )}
              </div>
              <div className="border-t border-slate-300 my-2"></div>
              <p className="font-bold text-gray-600">
                {getTimeAgo(post.timestamp)}
              </p>
              <p className="">{post.description}</p>
              <button onClick={() => likePost(index)}>
                <Heart fill={`${(post.emoji !== "")?"red":"transparent"}`} color={`${(post.emoji !== "")?"red":"black"}`}/>
              </button>
            </div>
          ))}
          <div
            ref={observerRef}
            className="w-full flex items-center justify-center mt-2"
          >
            <div className="bg-slate-200 rounded-full h-1 w-1"></div>
          </div>
        </div>
      </div>
      <BottomNavBar></BottomNavBar>
    </div>
  );
}
