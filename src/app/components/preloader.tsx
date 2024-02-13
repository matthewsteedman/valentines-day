import React from 'react';

const Preloader: React.FC = ({setLoading}: {setLoading: (loading: boolean) => void}) => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen gap-4 bg-pink-200">
      <video
        autoPlay
        loop
        muted
        className="object-cover w-36 h-36"
      >
        <source src="/Animation-1707855880438.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button onClick={() => setLoading(false)} className='p-4 text-pink-100 bg-pink-500 rounded'>
        Click Me 
      </button>
    </div>
  );
};

export default Preloader;