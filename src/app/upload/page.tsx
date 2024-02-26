"use client"
import React, { useState } from 'react';
import AppBar from '@/components/appbar';

const UploadPostPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData:any = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'hdaxh1mb');

    console.log(localStorage.getItem("accessToken"), localStorage.getItem("refreshToken"))
    const cloudinaryResponse = await fetch('https://api.cloudinary.com/v1_1/dw6nqwlyu/image/upload', {
      method: 'POST',
      body: formData,
    });
    const cloudinaryData = await cloudinaryResponse.json();
    const imageUrl = cloudinaryData.url;

    // Prepare data to send to backend
    const postData = {
      url: imageUrl,
      description: content, // Assuming 'content' holds the description
      emotions: [], // Assuming 'emotions' is an empty array for now
      answers: [], // Assuming 'answers' is an empty array for now
    };
    const accessToken = localStorage.getItem("accessToken") ?? "_"
    const refreshToken = localStorage.getItem("refreshToken") ?? "_"
    // Send data to your backend endpoint
    const response = await fetch('http://localhost:8000/api/v1/post/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': accessToken, // Include your access token here
        'Refresh-Token': refreshToken, // Include your refresh token here
      },
      body: JSON.stringify(postData),
    });
    // Handle form submission (e.g., send data to server)
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Image:', image);
    // Reset form fields
    setTitle('');
    setContent('');
    setImage(null);
  };

  return (
    <div>
      <AppBar title="Upload Post" />
      <div className="container mx-auto px-4 py-16 bg-blue-100 text-slate-800 h-screen">
        <h1 className="text-2xl mt-4 font-bold mb-8">Upload Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
              Question 1
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
              Question 2
            </label>
            <textarea
              id="content"
              value={content}
              onChange={handleContentChange}
              rows={4}
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
              Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadPostPage;

