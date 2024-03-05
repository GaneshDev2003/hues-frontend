"use client";
import React, { useState } from "react";
import AppBar from "@/components/appbar";
import { Medula_One } from "next/font/google";
import BottomNavBar from "@/components/bottomnav";

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

  const refreshPage = () => {
    setContent("");
    setImage(null);
    setAnswer1("");
    setAnswer2("");
    setAnswer3("");
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleContent = (e: any) => {
    setContent(e.target.value);
  };

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
    let answers = [answer1, answer2, answer3];
    e.preventDefault();

    // Prepare data to send to backend
    const postData = {
      url: mediaUrl ?? "",
      description: content, // Assuming 'content' holds the description
      emotions: [emotions], // Assuming 'emotions' is an empty array for now
      answers: answers, // Assuming 'answers' is an empty array for now
    };
    const accessToken = localStorage.getItem("accessToken") ?? "_";
    const refreshToken = localStorage.getItem("refreshToken") ?? "_";
    44;

    console.log(accessToken);
    console.log(refreshToken);
    // Send data to your backend endpoint
    fetch("http://43.204.116.40:443/api/v1/post/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Token": accessToken, // Include your access token here
        "Refresh-Token": refreshToken, // Include your refresh token here
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        alert("Your post was successfully uploaded :)");
        refreshPage();
      })
      .catch((response) => {
        alert("Upload post failed!");
      });
  };

  return (
    <>
      <div>
        <div className="container mx-auto px-4 py-16">
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
                  value={emotions}
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
                value={answer1}
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
                value={answer2}
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
                value={answer3}
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
                onChange={handleContent}
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
                onChange={handleImageChange}
                accept="image/*"
                className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
            {mediaUrl ? (
              <div className="container mx-auto">
                <h3 className="text-lg text-primary my-3">Preview</h3>
                {mediaUrl.endsWith(".mp4") ? ( // Example condition for video
                  <video controls>
                    <source src={mediaUrl} type="video/mp4" />
                  </video>
                ) : (
                  <img src={mediaUrl} alt="Uploaded media" /> // Example for image
                )}
              </div>
            ) : (
              <button
                onClick={async () => {
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
                }}
                className="bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Upload
              </button>
            )}
            <button
              className="w-full mx-auto mt-3 mb-15 bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
            <BottomNavBar></BottomNavBar>
          </form>
        </div>
      </div>
    </>
  );
};

export default UploadPostPage;
