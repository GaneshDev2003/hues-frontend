'use client';
import React, { useState } from 'react';
import BottomNavBar from '@/components/bottomnav';
import { BASE_URL } from '@/utils/api';
import axios from 'axios';
import Cookies from 'js-cookie';
import MyAppBar from '@/components/appbar';
import { useRouter } from 'next/navigation';
import { tree } from 'next/dist/build/templates/app-page';
import CustomLoader from '@/components/loader';
import Image from 'next/image';
import { Media } from '@/components/media';

const UploadPostPage: React.FC = () => {
  const [isUploading, setUploading] = useState<boolean>(false);
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreview] = useState<string | null>();
  const [answer1, setAnswer1] = useState<string>();
  const [answer2, setAnswer2] = useState<string>();
  const [answer3, setAnswer3] = useState<string>();
  const [answer4, setAnswer4] = useState<string>();
  const [customEmotion, setCustomEmotion] = useState<string>('');
  const [videoSrc, seVideoSrc] = useState('');
  const accessToken = Cookies.get('huesAccessToken');
  const refreshToken = Cookies.get('huesRefreshToken');

  const handleLogout = async () => {
    Cookies.remove('huesAccessToken');
    Cookies.remove('huesRefreshToken');
    window.location.href = '/login';
  };

  const refreshPage = () => {
    setContent('');
    setImage(null);
    setAnswer1('');
    setAnswer2('');
    setAnswer3('');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      setImage(file);
      console.log(URL.createObjectURL(e.target.files![0]));
      setPreview(URL.createObjectURL(e.target.files![0]));
    }
  };

  const handleContent = (e: any) => {
    setContent(e.target.value);
  };

  const [emotions, setEmotions] = useState<string>('Happy');
  const handleEmotionChange = (e: any) => {
    setEmotions(e.target.value);
  };
  const handleAnswer1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer1(e.target.value);
  };
  const handleAnswer2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer2(e.target.value);
  };
  const handleAnswer3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer3(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    const formData: any = new FormData();

    formData.append('file', image);
    formData.append('upload_preset', 'hdaxh1mb');
    const cloudinaryResponse = await fetch(
      'https://api.cloudinary.com/v1_1/dw6nqwlyu/image/upload',
      {
        method: 'POST',
        body: formData,
      },
    );
    const cloudinaryData = await cloudinaryResponse.json();
    const mediaUrl = cloudinaryData.url;
    let answers = [answer1, answer2, answer3];
    const postData = {
      url: mediaUrl ?? '',
      description: content,
      emotions: [emotions],
      answers: answers,
    };
    try {
      const response = await axios.post(`${BASE_URL}/v1/post`, postData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status === 201) {
        setUploading(false);
        router.push('/discover');
        alert('Your post was successfully uploaded :)');
      }
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        try {
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
            const newResponse = await axios.post(
              `${BASE_URL}/v1/post`,
              postData,
              {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${refreshResponse.data.access}`,
                },
              },
            );

            if (newResponse.status === 201) {
              setUploading(false);
              router.push('/discover');
              alert('Your post was successfully uploaded :)');
            } else {
              handleLogout();
            }
          } else {
            handleLogout();
          }
        } catch (error) {
          handleLogout();
        }
      } else {
        alert('Upload post failed!');
      }
    }
  };
  const router = useRouter();
  return (
    <>
      <div>
        <div className="container mx-auto px-6 py-8 mb-8">
          <MyAppBar
            title="Upload"
            onBackButtonClick={() => router.back()}
          ></MyAppBar>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-primary text-xl font-bold mb-2"
            >
              How are you feeling?
            </label>
            <div className="relative w-full lg:max-w-sm">
              {emotions !== 'Others' ? (
                <select
                  id="emotion"
                  value={emotions}
                  onChange={handleEmotionChange}
                  className="w-full p-2.5 text-primary bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                >
                  <option>Happy</option>
                  <option>Sad</option>
                  <option>Anxious</option>
                  <option>Grateful</option>
                  <option>Joyous</option>
                  <option>Others</option>
                </select>
              ) : (
                <input
                  id="emotion"
                  type="text"
                  value={customEmotion}
                  onChange={(e) => setCustomEmotion(e.target.value)}
                  placeholder="Enter your emotion"
                  className="w-full p-2.5 text-primary bg-white border rounded-md shadow-sm outline-none focus:border-indigo-600"
                />
              )}
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-xl text-primary font-bold mb-2"
            >
              Are there any benefits to feeling this way?
            </label>
            <input
              id="content"
              value={answer1}
              onChange={handleAnswer1}
              className="w-full border rounded-md py-2 px-3 text-xl text-primary focus:outline-none focus:border-blue-500"
            ></input>
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-xl text-primary font-bold mb-2"
            >
              What do you think is the root cause of this feeling?
            </label>
            <input
              id="content"
              value={answer2}
              onChange={handleAnswer2}
              className="w-full border rounded-md py-2 px-3 text-xl text-primary focus:outline-none focus:border-blue-500"
            ></input>
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-xl text-primary font-bold mb-2"
            >
              Is this root cause a fact?
            </label>
            <input
              id="content"
              value={answer3}
              onChange={handleAnswer3}
              className="w-full border rounded-md py-2 px-3 text-xl text-primary focus:outline-none focus:border-blue-500"
            ></input>
          </div>

          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-xl text-textcolor font-bold mb-2"
            >
              If not, what is the real fact? This is the caption for the post
              you will be uploading
            </label>
            <input
              id="content"
              value={content}
              onChange={handleContent}
              className="w-full border rounded-md py-2 px-3 text-xl text-textcolor focus:outline-none focus:border-blue-500"
            ></input>
          </div>

          <div>
            <label htmlFor="image" className="block text-textcolor">
              Based on the above answers & anything else you wish to express,
              upload a creative piece.
            </label>
          </div>

          <div className="py-6">
            <div
              id="image-preview"
              className="max-w-sm p-6 mb-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer"
            >
              {previewUrl ? (
                <Media mediaUrl={previewUrl}></Media>
              ) : (
                <div>
                  <input
                    accept="image/*,video/*"
                    id="upload"
                    onChange={handleImageChange}
                    type="file"
                    className="hidden"
                  />
                  <label htmlFor="upload" className="cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-8 h-8 text-gray-700 mx-auto mb-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                      />
                    </svg>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">
                      Upload picture or video
                    </h5>

                    <p className="font-normal text-sm text-gray-400 md:px-6">
                      and should be in{' '}
                      <b className="text-gray-600">JPG, PNG, GIF or MP4</b>{' '}
                      format.
                    </p>
                    <span
                      id="filename"
                      className="text-gray-500 bg-gray-200 z-50"
                    ></span>
                  </label>
                </div>
              )}
            </div>
            <div className="flex items-center justify-center w-full">
              {isUploading ? (
                <CustomLoader></CustomLoader>
              ) : (
                <>
                  <label className="w-full text-white bg-primary hover:bg-primary/70 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center mr-2 mb-2 cursor-pointer">
                    <button
                      className="text-center text-lg ml-2"
                      onClick={handleSubmit}
                    >
                      Upload
                    </button>
                  </label>
                </>
              )}
            </div>
          </div>
          <BottomNavBar></BottomNavBar>
        </div>
      </div>
    </>
  );
};

export default UploadPostPage;
