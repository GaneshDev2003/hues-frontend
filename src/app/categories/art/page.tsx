'use client';
import BottomNavBar from '@/components/bottomnav';
import React from 'react';

export default function Art() {
  return (
    <div>
      <div className="bg-white text-slate-800 container mx-auto px-4 py-16">
      <div className='font-bold text-3xl text-primary text-center mb-4 gap-2'>
          Drawing & Painting
        </div>
        <div className="flex flex-row mb-4 gap-2">
          <img
            className="object-contain w-full"
            src="/images/art_large.png"
          ></img>
          <h1 className="font-bold text-xl text-black">
            You can do any of these to express your emotions through painting !
          </h1>
        </div>

        <div className="flex flex-col gap-y-4">
          <div
            className="bg-cover bg-no-repeat py-5 px-3 overflow-hidden text-center"
            style={{ backgroundImage: 'url("/images/rectangle.svg")' }}
          >
            <h2 className="font-semibold text-lg">Mandala</h2>
            <p>
              Discover tranquility through the simple act of drawing intricate
              circles
            </p>
          </div>

          <div
            className="bg-cover bg-no-repeat p-5 overflow-hidden text-center"
            style={{ backgroundImage: 'url("/images/rectangle-alt.png")' }}
          >
            <h2 className="font-semibold text-lg">Collage Making</h2>
            <p>
              Express yourself freely by piecing together bits of your
              imagination
            </p>
          </div>

          <div
            className="bg-cover bg-no-repeat p-5 overflow-hidden text-center"
            style={{ backgroundImage: 'url("/images/rectangle.svg")' }}
          >
            <h2 className="font-semibold text-lg">Neurographic Art</h2>
            <p>
              Unleash creativity with power of lines, effortlessly creating
              dynamic art
            </p>
          </div>

          <div
            className="bg-cover bg-no-repeat p-5 overflow-hidden text-center"
            style={{ backgroundImage: 'url("/images/rectangle-alt.png")' }}
          >
            <h2 className="font-semibold text-lg">Doodling</h2>
            <p>
              Release stress and spark inspiration with playful, spontaneous
              doodles
            </p>
          </div>
        </div>
      </div>
      <BottomNavBar></BottomNavBar>
    </div>
  );
}
