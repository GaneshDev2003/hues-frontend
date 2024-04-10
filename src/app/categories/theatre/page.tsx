'use client';
import MyAppBar from '@/components/appbar';
import BottomNavBar from '@/components/bottomnav';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Art() {
  const router = useRouter();
  return (
    <div>
      <div className="bg-white text-slate-800 container mx-auto px-4 py-8 mb-14">
        <MyAppBar
          title="Theatre"
          onBackButtonClick={() => router.back()}
        ></MyAppBar>
        <div className="flex flex-row mb-4 gap-2">
          <img
            className="object-contain w-full"
            src="/images/theatre_large.png"
          ></img>
          <h1 className="font-bold text-xl text-black">
            You can do any of these to express your emotions through drama!
          </h1>
        </div>
        <div className="flex flex-col gap-y-4">
          <div
            className="bg-cover bg-no-repeat rounded-xl p-5 text-center hover:cursor-pointer"
            style={{ backgroundImage: 'url("/images/rectangle-design.png")' }}
            onClick={() => {router.push("/upload")}}
          >
            <h2 className="font-semibold text-lg">Monologue</h2>
            <p>
              Take centre stage, delve into the depths of a character&apos;s
              soul. Explore their inner world, voice their thoughts, 
            </p>
          </div>

          <div
            className="bg-cover bg-no-repeat rounded-xl p-5 text-center hover:cursor-pointer"
            style={{
              backgroundImage: 'url("/images/rectangle-design-alt.png")',
            }}
            onClick={() => {router.push("/upload")}}
          >
            <h2 className="font-semibold text-lg">Role Playing</h2>
            <p>
              Embody a character, create a world, and let your imagination soar.
              Unleash your creativity and have some fun
            </p>
          </div>

          <div
            className="bg-cover bg-no-repeat rounded-xl p-5 text-center hover:cursor-pointer"
            style={{ backgroundImage: 'url("/images/rectangle-design.png")' }}
            onClick={() => {router.push("/upload")}}
          >
            <h2 className="font-semibold text-lg mb-2">Dramatic Reading</h2>
            <p>
              Bring words to life, paint a picture with your voice. Discover the
              power of storytelling
            </p>
          </div>

          <div
            className="bg-cover bg-no-repeat rounded-xl mb-16 p-5 text-center hover:cursor-pointer"
            style={{
              backgroundImage: 'url("/images/rectangle-design-alt.png")',
            }}
            onClick={() => {router.push("/upload")}}
          >
            <h2 className="font-semibold text-lg mb-2">Miming</h2>
            <p>
              Speak volumes without saying a word. Use your body to paint a
              picture, tell a story.
            </p>
          </div>
        </div>
      </div>
      <BottomNavBar></BottomNavBar>
    </div>
  );
}
