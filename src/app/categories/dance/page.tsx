'use client';
import MyAppBar from '@/components/appbar';
import BottomNavBar from '@/components/bottomnav';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Art() {
  const router = useRouter();
  return (
    <div>
      <div className="bg-white text-slate-800 container mx-auto px-4 py-8 my-auto mb-14">
        <MyAppBar
          title="Dance"
          onBackButtonClick={() => router.back()}
        ></MyAppBar>
        <div className="flex flex-row mb-4 gap-2">
          <img
            className="object-contain w-full"
            src="/images/dancing.png"
          ></img>
          <h1 className="font-bold text-xl text-black">
            You can do any of these to express your emotions through dance!
          </h1>
        </div>

        <div className="flex flex-col gap-y-4">
          <div
            className="bg-cover bg-no-repeat rounded-xl p-5 text-center"
            style={{ backgroundImage: 'url("/images/rectangle-design.png")' }}
          >
            <h2 className="font-semibold text-lg">Free Dance</h2>
            <p>
              Forget the steps, just move! Let your body express itself however
              it feels, there&apos;s no right or wrong way
            </p>
          </div>

          <div
            className="bg-cover bg-no-repeat rounded-xl p-5 text-center"
            style={{
              backgroundImage: 'url("/images/rectangle-design-alt.png")',
            }}
          >
            <h2 className="font-semibold text-lg">Breath connected movement</h2>
            <p>
              Feel the rhythm of your breath guide you. Move with each inhale
              and exhale, letting your body flow naturally
            </p>
          </div>

          <div
            className="bg-cover bg-no-repeat rounded-xl p-5 text-center"
            style={{ backgroundImage: 'url("/images/rectangle-design.png")' }}
          >
            <h2 className="font-semibold text-lg">Improv/Break the routine</h2>
            <p>
              Ditch the steps, embrace the unexpected. Explore the spontaneity!
            </p>
          </div>

          <div
            className="bg-cover bg-no-repeat rounded-xl p-5 text-center"
            style={{
              backgroundImage: 'url("/images/rectangle-design-alt.png")',
            }}
          >
            <h2 className="font-semibold text-lg">Expressive dance</h2>
            <p>
              Your body is your canvas, your emotions are the paint. Tell your
              story without words, letting movement speak volumes
            </p>
          </div>
        </div>
      </div>
      <BottomNavBar></BottomNavBar>
    </div>
  );
}
