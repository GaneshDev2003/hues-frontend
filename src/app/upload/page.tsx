"use client";
import React, { useState } from "react";
import AppBar from "@/components/appbar";

const UploadPostPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [mediaUrl, setMediaUrl] = useState<string | null>();
  const [answer1, setAnswer1] = useState<string>();
  const [answer2, setAnswer2] = useState<string>();
  const [answer3, setAnswer3] = useState<string>();
  const [answer4, setAnswer4] = useState<string>();

  const [videoSrc, seVideoSrc] = useState("");

  const [emotions, setEmotions] = useState<string>();
  const handleEmotionChange = (e: any) => {
    setEmotions(e.target.value);
  };

  const [preview, togglePreview] = useState<boolean>();
  const handleAnswer1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer1(e.target.value);
  };
  const handleAnswer2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer2(e.target.value);
  };
  const handleAnswer3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer3(e.target.value);
  };
  const handleAnswer4 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer4(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    let answers = [answer1, answer2, answer3, answer4];
    e.preventDefault();
    const formData: any = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "hdaxh1mb");

    const cloudinaryResponse = await fetch(
      "https://api.cloudinary.com/v1_1/dw6nqwlyu/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const cloudinaryData = await cloudinaryResponse.json();
    const imageUrl = cloudinaryData.url;
    setMediaUrl(imageUrl);
    // Prepare data to send to backend
    const postData = {
      url: imageUrl,
      description: content, // Assuming 'content' holds the description
      emotions: [emotions], // Assuming 'emotions' is an empty array for now
      answers: answers, // Assuming 'answers' is an empty array for now
    };
    const accessToken = localStorage.getItem("accessToken") ?? "_";
    const refreshToken = localStorage.getItem("refreshToken") ?? "_";
    // Send data to your backend endpoint
    // const response = await fetch("http://localhost:8000/api/v1/post/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Token": accessToken, // Include your access token here
    //     "Refresh-Token": refreshToken, // Include your refresh token here
    //   },
    //   body: JSON.stringify(postData),
    // });
  };

  return (
    <>
      <div>
        <div className="container mx-auto px-4 py-16 h-screen">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-primary text-xl font-bold mb-2"
              >
                How are you feeling?
              </label>
              <div className="relative w-full lg:max-w-sm">
                <select
                  onChange={handleEmotionChange}
                  className="w-full p-2.5 text-primary bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                >
                  <option>Happy</option>
                  <option>Sad</option>
                  <option>Anxious</option>
                  <option>Grateful</option>
                  <option>Joyous</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="content"
                className="block text-xl text-primary font-bold mb-2"
              >
                Are there any benefits to feeling this way?
              </label>
              <input
                id="content"
                value={content}
                onChange={handleAnswer1}
                className="w-full border rounded-md py-2 px-3 text-xl text-primary focus:outline-none focus:border-blue-500"
              ></input>
            </div>
            <div className="mb-4">
              <label
                htmlFor="content"
                className="block text-xl text-primary font-bold mb-2"
              >
                What do you think is the root cause of this feeling?
              </label>
              <input
                id="content"
                value={content}
                onChange={handleAnswer2}
                className="w-full border rounded-md py-2 px-3 text-xl text-primary focus:outline-none focus:border-blue-500"
              ></input>
            </div>
            <div className="mb-4">
              <label
                htmlFor="content"
                className="block text-xl text-primary font-bold mb-2"
              >
                Is this root cause a fact?
              </label>
              <input
                id="content"
                value={content}
                onChange={handleAnswer3}
                className="w-full border rounded-md py-2 px-3 text-xl text-primary focus:outline-none focus:border-blue-500"
              ></input>
            </div>

            <div className="mb-4">
              <label
                htmlFor="content"
                className="block text-xl text-primary font-bold mb-2"
              >
                If not, what is the real fact? This is the caption for the post
                you will be uploading
              </label>
              <input
                id="content"
                value={content}
                onChange={handleAnswer4}
                className="w-full border rounded-md py-2 px-3 text-xl text-primary focus:outline-none focus:border-blue-500"
              ></input>
            </div>

            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-primary font-bold mb-2"
              >
                Based on the above answers & anything else you wish to express,
                upload a creative piece. Video, text, image and audio are
                supported.
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              onClick={() => togglePreview(!preview)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Upload
            </button>
          </form>
          <div>
            {mediaUrl && (
              <div>
                {mediaUrl.endsWith(".mp4") ? ( // Example condition for video
                  <video controls>
                    <source src={mediaUrl} type="video/mp4" />
                  </video>
                ) : (
                  <img src={mediaUrl} alt="Uploaded media" /> // Example for image
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadPostPage;
