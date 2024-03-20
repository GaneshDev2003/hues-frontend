'use client';
import BottomNavBar from '@/components/bottomnav';
import React from 'react';

export default function Art() {
  return (
    <div>
      <div className="bg-white text-slate-800 container mx-auto px-4 py-16">
        <div className='font-bold text-3xl text-primary text-center mb-4 gap-2'>
          Music
        </div>
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
            className="bg-cover bg-no-repeat py-5 px-3 overflow-hidden text-center"
            style={{ backgroundImage: 'url("/images/rectangle.svg")' }}
          >
            <h2 className="font-semibold text-lg">
              Music with everyday Objects
            </h2>
            <p className="text-sm">
              Craft captivating tunes from ordinary items, turning the mundane
              into musical magic effortlessly
            </p>
          </div>

          <div
            className="bg-cover bg-no-repeat p-5 overflow-hidden text-center"
            style={{ backgroundImage: 'url("/images/rectangle-alt.png")' }}
          >
            <h2 className="font-semibold text-lg">Mixing Music</h2>
            <p className="text-sm">
              Blend rhythms seamlessly, creating harmonious symphonies from
              diverse sounds to evoke emotions
            </p>
          </div>

          <div
            className="bg-cover bg-no-repeat p-5 overflow-hidden text-center"
            style={{ backgroundImage: 'url("/images/rectangle.svg")' }}
          >
            <h2 className="font-semibold text-lg">Lyric Selection</h2>
            <p className="text-sm">
              Choose profound lyrics, weaving them into your music to convey
              heartfelt messages authentically
            </p>
          </div>

          <div
            className="bg-cover bg-no-repeat p-5 overflow-hidden text-center"
            style={{ backgroundImage: 'url("/images/rectangle-alt.png")' }}
          >
            <h2 className="font-semibold text-lg">Sound Bath Composition</h2>
            <p className="text-sm">
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
