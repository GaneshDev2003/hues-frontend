'use client';
import MyAppBar from '@/components/appbar';
import BottomNavBar from '@/components/bottomnav';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Art() {
  const router = useRouter();
  return (
    <div>
      <div className="bg-white text-slate-800 container mx-auto px-4 py-16">
        <MyAppBar
          title="Theatre"
          onBackButtonClick={() => router.back()}
        ></MyAppBar>
        <div className="flex flex-row mb-4 gap-2">
          <img
            className="object-contain w-full"
            src="/images/writing_large.png"
          ></img>
          <h1 className="font-bold text-xl text-black">
            You can do any of these to express your emotions through writing !
          </h1>
        </div>

        <div className="flex max-w-screen flex-col gap-y-4">
          <div
            className="bg-cover bg-no-repeat rounded-xl p-5 text-center"
            style={{ backgroundImage: 'url("/images/rectangle-design.png")' }}
          >
            <h2 className="font-semibold text-lg">Acrostic Poems</h2>
            <p>
              Unlock creativity effortlessly by crafting poetic gems from simple
              wordplay
            </p>
          </div>

          <div
            className="bg-cover bg-no-repeat rounded-xl p-5 text-center"
            style={{
              backgroundImage: 'url("/images/rectangle-design-alt.png")',
            }}
          >
            <h2 className="font-semibold text-lg">Letter to Yourself</h2>
            <p>
              Find solace and self-discovery in the empowering act of writing a
              letter to your own soul
            </p>
          </div>

          <div
            className="bg-cover bg-no-repeat p-5 rounded-xl text-center"
            style={{ backgroundImage: 'url("/images/rectangle-design.png")' }}
          >
            <h2 className="font-semibold text-lg">Inner Dialogue Writing</h2>
            <p>
              Find solace and self-discovery in the empowering act of writing a
              letter to your own soul
            </p>
          </div>

          <div
            className="bg-cover bg-no-repeat p-5 rounded-xl text-center"
            style={{
              backgroundImage: 'url("/images/rectangle-design-alt.png")',
            }}
          >
            <h2 className="font-semibold text-lg">Flash Fiction</h2>
            <p>
              {' '}
              Ignite your imagination with quick bursts of storytelling,
              creating vibrant worlds in just a few words
            </p>
          </div>
        </div>
      </div>
      <BottomNavBar></BottomNavBar>
    </div>
  );
}
