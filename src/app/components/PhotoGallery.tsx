'use client'

// components/PhotoGallery.tsx
import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'

const PhotoGallery: React.FC = () => {
  // Mocked array of photo objects with URL and caption
  const photos = [
    { url: '/photos-for-gallery/bgds.jpg', caption: 'What started it all' , video: false },
    { url: '/photos-for-gallery/vgh.jpg', caption: 'Day one of meeting' , video: false },
    { url: '/photos-for-gallery/vfghtswe.jpg', caption: 'Early days spent together' , video: false },
    { url: '/photos-for-gallery/asd.mp4', caption: 'Do you remember this ?' , video: true },
    { url: '/423.jpg', caption: 'Adventures Together' , video: false },
    { url: '/photos-for-gallery/va.jpg', caption: 'Destined pair' , video: false },
    { url: '/photos-for-gallery/hjdf.jpg', caption: 'The day I saw YOU wear my favorite dress' , video: false },
    { url: '/photos-for-gallery/bsdg.jpg', caption: 'The way you looked at me 😍' , video: false },
    { url: '/photos-for-gallery/dafda.mp4', caption: 'Favorite memories' , video: true },
    { url: '/21.jpg', caption: 'Christmas 2023', video: false },
    // Add more photos as needed
  ];

  return (
    <div className="grid w-full grid-cols-1 gap-4 bg-pink-100 md:grid-cols-2 h-fit">
      {photos.map((photo, index) => (
        <div key={index} className="relative overflow-hidden">
          <Zoom
          >   
          {
            photo.video == true ? 
            <video
            autoPlay
            loop
            muted
            className="object-cover w-full h-full max-w-lg m-auto cursor-pointer max-h-[600px] md:p-4">
                 <source src={photo.url} type="video/mp4" />
                 Your browser does not support the video tag.
            </video>
            :
            <img src={photo.url}  className={ 'w-full h-full md:p-4 m-auto max-h-[600px] max-w-lg object-cover cursor-pointer'}  />

          }
          </Zoom>
          <p className="absolute bottom-0 left-0 w-full p-2 mt-4 text-center text-black bg-white">
            {photo.caption}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
