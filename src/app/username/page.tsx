'use client';
import Button from '@/components/button';
import { BASE_URL } from '@/utils/api';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function Username() {
  const [username, setUsername] = useState('');
  const { data: session, status } = useSession();
  const router = useRouter();
  const handleContent = (e: any) => {
    setUsername(e.target.value);
  };

  const handleSubmit = () => {
    const email = session?.user?.email;
    axios
      .post(`${BASE_URL}/v2/signup`, { username: username, email: email })
      .then((response) => {
        alert('User succesfully created!');
        router.push('/home');
      })
      .catch((error) => {
        if (error.response.status == 409) {
          alert('Your username has already been taken up!');
        }
      });
  };
  return (
    <div className="h-screen">
      <div className="h-screen left-0">
        <div className="container mx-auto flex flex-col items-center justify-center relative w-full h-screen bg-white">
          <div className=" mx-auto">
            <div className="flex items-center">
              <div className="mb-4">
                <label
                  htmlFor="content"
                  className="block text-xl text-primary font-bold mb-2"
                >
                  Enter Username
                </label>
                <input
                  id="content"
                  value={username}
                  onChange={handleContent}
                  className="w-full border rounded-md py-2 px-3 text-xl text-primary focus:outline-none focus:border-blue-500"
                ></input>
              </div>
            </div>
          </div>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </div>
  );
}

export default Username;
