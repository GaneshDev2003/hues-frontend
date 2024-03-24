import Image from 'next/image';
import React from 'react';

export const Media = ({ mediaUrl }: { mediaUrl: string }) => {
  return (
    <div className="w-full min-h-48 rounded-md">
      {mediaUrl.endsWith('.mp4') ? ( // Example condition for video
        <video className="w-full min-h-48" controls>
          <source src={mediaUrl} type="video/mp4" />
        </video>
      ) : (
        <Image
          loader={() => mediaUrl}
          alt="uploaded-image"
          src={mediaUrl}
          className="min-h-48 rounded-lg mx-auto"
          layout="responsive"
          width={300}
          height={200}
        ></Image> // Example for image
      )}
    </div>
  );
};
