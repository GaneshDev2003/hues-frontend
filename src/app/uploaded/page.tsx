'use client';
import BottomNavBar from '@/components/bottomnav';
import { Media } from '@/components/media';
import { BASE_URL, getAxios } from '@/utils/api';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { handleLogout } from '@/utils/logout';
import { AppBar } from '@mui/material';
import MyAppBar from '@/components/appbar';
import { useRouter } from 'next/navigation';
import { Delete, Share2, Trash2 } from 'lucide-react';
import { headers } from 'next/headers';
import CustomModal from '@/components/modal';

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
  const axios = getAxios();
  const [deletePostId, setDeletePostId] = useState<number | null>();
  const [showDeleteModal, setDeleteModal] = useState<boolean>(false);

  const handleDelete = (id: number) => {
    axios
      .delete(`${BASE_URL}/v1/post?postId=${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        alert('Post successfully deleted!');
        window.location.href = '/uploaded';
      });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/v1/post`, {
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
            const newResponse = await axios.get(`${BASE_URL}/v1/post`, {
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
      }
    };

    fetchData();
  }, []);

  const handleShare = async (post: Post) => {
    const imageUrl = "https" + post.multimedia.split("http")[1];
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const files = [new File([blob], "Image.jpeg", {type: blob.type})]
    const shareData = {
      files: files,
      title: "Check out my Post",
      // text: "Check out my Post",
      // url: "Check out my new Post",
    }
    if (navigator.canShare(shareData)) {
      try {
        console.log(shareData)
        await navigator.share(shareData)
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          console.error(err.name, err.message);
        }
      }
    } else {
      console.log('Sharing not supported', shareData);
    }
  }

  return (
    <div className="bg-white text-slate-800 container mx-auto h-screen">
      <div className="mx-4 py-8">
        <MyAppBar
          title="Your Posts"
          onBackButtonClick={() => router.back()}
        ></MyAppBar>
        <CustomModal
          onClose={() => {
            setDeleteModal(false);
          }}
          showModal={showDeleteModal}
          onOk={() => {
            if (deletePostId) handleDelete(deletePostId);
          }}
          title="Delete Post"
          content="Are you sure you want to delete this post?"
        ></CustomModal>
        {postData.length > 0 ? (
          <div className="flex flex-wrap mb-16">
            {postData.map((post: Post, index: number) => (
              <div
                key={index}
                className="shadow-md rounded-lg w-full p-4 bg-primary/20 my-2"
              >
                {/* <Media mediaUrl={post.multimedia}></Media> */}
                <div className="flex items-center justify-center w-full">
                  {!post.multimedia.endsWith('mp4') && <img src={post.multimedia} alt="Media"/>}
                  {post.multimedia.endsWith('mp4') && <video autoPlay loop><source src={post.multimedia} type="video/mp4"/></video>}
                </div>
                <div className="border-t border-slate-300 my-2"></div>
                <div className="flex justify-between">
                  <p className="font-bold text-gray-600">
                    {getTimeAgo(post.timestamp)}
                  </p>
                  <div className='flex gap-2'>
                    <button onClick={() => {handleShare(post)}}><Share2/></button>
                    <button
                      className="text-red-500"
                      onClick={() => {
                        setDeletePostId(post.id);
                        setDeleteModal(true);
                      }}
                    >
                      <Trash2></Trash2>
                    </button>
                  </div>
                </div>
                <p className="">{post.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center h-screen justify-center">
            <h3 className="text-xl text-textcolor">
              You have not uploaded any posts!
            </h3>
          </div>
        )}
      </div>
      <BottomNavBar></BottomNavBar>
    </div>
  );
}
