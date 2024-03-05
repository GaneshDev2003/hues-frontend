import React from "react";

export const Media = ({ mediaUrl }: { mediaUrl: string }) => {
  return (
    <div className="w-full min-h-48 rounded-md mb-3">
      {mediaUrl.endsWith(".mp4") ? ( // Example condition for video
        <video className="w-full min-h-48" controls>
          <source src={mediaUrl} type="video/mp4" />
        </video>
      ) : (
        <img src={mediaUrl} className="w-full min-h-48" alt="image" /> // Example for image
      )}
    </div>
  );
};
