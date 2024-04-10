'use client';
import MyAppBar from '@/components/appbar';
import BottomNavBar from '@/components/bottomnav';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Art() {
  const router = useRouter();
  return (
    <div>
      <div className="bg-white text-slate-800 container mx-auto px-4 py-8">
        <MyAppBar
          title="Music"
          onBackButtonClick={() => router.back()}
        ></MyAppBar>
        <div className="flex flex-row mb-4 gap-2">
          <img
            className="object-contain w-full"
            src="/images/music_large.png"
          ></img>
          <h1 className="font-bold text-xl text-black">
            You can do any of these to express your emotions through music !
          </h1>
        </div>

        <div className="flex flex-col gap-y-4">
          <div
            className="bg-cover bg-no-repeat rounded-xl p-5 text-center hover:cursor-pointer"
            style={{ backgroundImage: 'url("/images/rectangle-design.png")' }}
            onClick={() => {router.push("/upload")}}
          >
            <h2 className="font-semibold text-lg">
              Music with everyday Objects
            </h2>
            <p>
              Craft captivating tunes from ordinary items, turning the mundane
              into musical magic effortlessly
            </p>
          </div>

          <div
            className="bg-cover bg-no-repeat rounded-xl p-5 text-center hover:cursor-pointer"
            style={{
              backgroundImage: 'url("/images/rectangle-design-alt.png")',
            }}
            onClick={() => {router.push("/upload")}}
          >
            <h2 className="font-semibold text-lg">Mixing Music</h2>
            <p>
              Blend rhythms seamlessly, creating harmonious symphonies from
              diverse sounds to evoke emotions
            </p>
          </div>

          <div
            className="bg-cover bg-no-repeat rounded-xl p-5 text-center hover:cursor-pointer"
            style={{ backgroundImage: 'url("/images/rectangle-design.png")' }}
            onClick={() => {router.push("/upload")}}
          >
            <h2 className="font-semibold text-lg">Lyric Selection</h2>
            <p>
              Choose profound lyrics, weaving them into your music to convey
              heartfelt messages authentically
            </p>
          </div>

          <div
            className="bg-cover bg-no-repeat rounded-xl p-5 mb-16 text-center hover:cursor-pointer"
            style={{
              backgroundImage: 'url("/images/rectangle-design-alt.png")',
            }}
            onClick={() => {router.push("/upload")}}
          >
            <h2 className="font-semibold text-lg">Sound Bath Composition</h2>
            <p>
              Immerse in tranquil sonic waves from gongs, and chimes, calming
              the mind and nourishing the soul
            </p>
          </div>
        </div>
      </div>
      <BottomNavBar></BottomNavBar>
    </div>
  );
}
