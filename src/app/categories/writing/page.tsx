'use client'
import BottomNavBar from '@/components/bottomnav'
import React from 'react'

export default function Art() {
  return (
    <div>
        <div className = "bg-white text-slate-800 container mx-auto px-4 py-16">
            <div className = "flex flex-row mb-4 gap-2">
            <img className = "object-contain w-full" src = "/images/writing.png"></img>
                <h1 className = "font-bold text-xl text-black">You can do any of these to express your emotions through art !</h1>
            </div>

            <div className='flex max-w-screen flex-col gap-y-4'>

                    <div className = "bg-cover bg-no-repeat py-5 px-3 overflow-hidden text-center"  style={{backgroundImage: 'url("/images/rectangle.svg")'}}>
                        <h2 className = "font-semibold text-lg">Acrostic Poems</h2>
                        <p>Unlock creativity effortlessly by crafting poetic gems from simple wordplay</p>
                    </div>

                    <div className = "bg-cover bg-no-repeat p-5 overflow-hidden text-center"  style={{backgroundImage: 'url("/images/rectangle-alt.png")'}}>
                        <h2 className = "font-semibold text-lg">Letter to Yourself</h2>
                        <p className='text-sm'>Find solace and self-discovery in the empowering act of writing a letter to your own soul</p>
                    </div>

                    <div className = "bg-cover bg-no-repeat p-5 overflow-hidden text-center"  style={{backgroundImage: 'url("/images/rectangle.svg")'}}>
                        <h2 className = "font-semibold text-lg">Inner Dialogue Writing</h2>
                        <p className='text-sm'>Find solace and self-discovery in the empowering act of writing a letter to your own soul</p>
                    </div>

                    <div className = "bg-cover bg-no-repeat p-5 overflow-hidden text-center"  style={{backgroundImage: 'url("/images/rectangle-alt.png")'}}>
                        <h2 className = "font-semibold text-lg">Flash Fiction</h2>
                        <p className='text-sm'> Ignite your imagination with quick bursts of storytelling, creating vibrant worlds in just a few words</p>
                    </div>
               </div>
        </div>
        <BottomNavBar></BottomNavBar>
    </div>
  )
}
