'use client';
import React, { useState } from 'react';
import BottomNavBar from '@/components/bottomnav';
import { BASE_URL } from '@/utils/api';
import Cookies from 'js-cookie';
import MyAppBar from '@/components/appbar';
import { useRouter } from 'next/navigation';

const UploadPostPage: React.FC = () => {
  const [feedback, setFeedback] = useState<string>('');

  const [videoSrc, seVideoSrc] = useState('');
  const accessToken = Cookies.get('huesAccessToken');
  const refreshToken = Cookies.get('huesRefreshToken');

  const handleFeedbackChange = (e: any) => {
    setFeedback(e.target.value);
  };
  const handleLogout = async () => {
    Cookies.remove('huesAccessToken');
    Cookies.remove('huesRefreshToken');
    window.location.href = '/login';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const feedBackData = {
      text: feedback,
    };

    if (feedback)
      fetch(BASE_URL + '/v2/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + accessToken,
        },
        body: JSON.stringify(feedBackData),
      })
        .then((response) => {
          if (response.status == 201) {
            alert('Your feedback was uploaded :)');
          } else if (response.status == 401) {
            fetch(BASE_URL + '/v1/refresh', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ refresh: refreshToken }),
            })
              .then((response) => {
                if (response.status == 200) {
                  return response.json();
                } else {
                  handleLogout();
                }
              })
              .then((tokenData) => {
                Cookies.set('huesAccessToken', tokenData.access);
                fetch(BASE_URL + '/v1/post', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + tokenData.access,
                  },
                  body: JSON.stringify(feedBackData),
                })
                  .then((response) => {
                    if (response.status == 201) {
                      alert('Your post was successfully uploaded :)');

                      router.push('/profile');
                    } else {
                      handleLogout();
                    }
                  })
                  .catch((response) => {
                    handleLogout();
                  });
              })
              .catch((response) => {
                handleLogout();
              });
          }
        })
        .catch((response) => {
          alert('Upload post failed!');
        });
  };
  const router = useRouter();
  return (
    <>
      <div>
        <div className="container mx-auto px-4 py-8 mb-8">
          <MyAppBar
            title="Upload"
            onBackButtonClick={() => router.back()}
          ></MyAppBar>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="content"
                className="block text-xl text-primary font-bold mb-2"
              >
                Please provide your feedback below
              </label>
              <textarea
                id="content"
                value={feedback}
                onChange={handleFeedbackChange}
                className="w-full border rounded-md py-2 px-3 text-xl text-primary focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            <button
              className="w-full mx-auto mt-3 mb-10 bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
            <BottomNavBar></BottomNavBar>
          </form>
        </div>
      </div>
    </>
  );
};

export default UploadPostPage;
