'use client';
import BottomNavBar from '@/components/bottomnav';
import React from 'react';

export default function Art() {
  return (
    <div>
      <div className="bg-white text-slate-800 container mx-auto px-4 py-8">
      <div className='font-bold text-3xl text-primary text-center mb-4 gap-2'>
          Theatre
        </div>
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
            className="bg-cover bg-no-repeat py-5 px-3 overflow-hidden text-center"
            style={{ backgroundImage: 'url("/images/rectangle.svg")' }}
          >
            <h2 className="font-semibold text-lg">Monologue</h2>
            <p className="text-sm">
              Take centre stage, delve into the depths of a character&apos;s
              soul. Explore their inner world, voice their thoughts, 
            </p>
          </div>

          <div
            className="bg-cover bg-no-repeat p-5 overflow-hidden text-center"
            style={{ backgroundImage: 'url("/images/rectangle-alt.png")' }}
          >
            <h2 className="font-semibold text-lg">Collage Making</h2>
            <p className="text-sm">
              Embody a character, create a world, and let your imagination soar.
              Unleash your creativity and have some fun
            </p>
          </div>

          <div
            className="bg-cover bg-no-repeat p-5 overflow-hidden text-center"
            style={{ backgroundImage: 'url("/images/rectangle.svg")' }}
          >
            <h2 className="font-semibold text-lg mb-2">Neurographic Art</h2>
            <p className="text-sm">
               Bring words to life, paint a picture with your voice. Discover
              the power of storytelling
            </p>
          </div>

          <div
            className="bg-cover bg-no-repeat p-5 overflow-hidden text-center"
            style={{ backgroundImage: 'url("/images/rectangle-alt.png")' }}
          >
            <h2 className="font-semibold text-lg mb-2">Doodling</h2>
            <p className="text-sm">
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
