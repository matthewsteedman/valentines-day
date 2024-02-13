'use client'

/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import PhotoGallery from "./components/PhotoGallery";
import Preloader from './components/preloader';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col justify-between min-h-screen bg-pink-100">
      {
        loading ? 
        <Preloader setLoading={setLoading} />
        :
        <><section className="relative z-10 p-4 text-center text-pink-500 bg-pink-100 md:p-12">
            <h1 className="text-2xl font-bold md:text-5xl">Happy Valentine's Day, My BABES!!!!!!</h1>
          </section><header className="relative z-10 p-40 text-center text-white bg-pink-500 md:p-56">
              <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 z-0 object-cover w-full h-full"
              >
                <source src="/me&mybabes.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </header><section className="p-4 text-black bg-white md:p-12">
              <h2 className="mb-4 text-2xl font-bold text-center text-pink-500">Established :</h2>
              <ul>
                <li className="text-3xl text-center text-pink-500">31 August 2022 - Forever ♾️</li>
              </ul>
            </section><PhotoGallery /><section className="p-4 text-pink-500 bg-pink-100 md:p-12">
              <h1 className="mb-4 text-4xl font-bold text-center">Special Message</h1>
             <p className='px-12 py-4 text-lg text-center md:px-32 md:py-12'>
             I know I messed up, and I keep saying I'll change, but I get why you might not believe me anymore. This time, though, I really mean it. There's no going back.

I sometimes wish I could go back and shake some sense into my past self. I really hope you can find it in your heart to forgive me, Larna. I'm serious about this, and I don't want to risk losing someone I truly love.

Thinking about our old memories made me realize how much I love you. 'Love' doesn't even cover it. Larna Cupido, I love you with all my heart. I hope you liked the memory peice I compiled to show our best moments. Thank you for being the one I care about the most.
See you later tonight ❤️🤗
               </p>
            </section><footer className="p-4 text-center text-pink-500 bg-gray-200">
              <p>Love to infinite</p>
              <div className="flex justify-center mt-2">
                31 August 2022 - Forever ♾️
              </div>
            </footer></>

      }
   
  </div>
  );
}
