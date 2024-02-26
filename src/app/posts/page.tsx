'use client'
import AppBar from '@/components/appbar';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const posts = [
  { id: 1, author: "John Doe", username: "@user1@1234", content: "Today was a wonderful day" },
  { id: 2, author: "Jane Smith", username: "@user@1235", content: "Consectetur ipsum dolor amet sit adipisicing eiusmod." },
  { id: 3, author: "Alice Johnson", username: "@user@1236", content:"Eiusmod sit amet dolor adipisicing ipsum consectetur."},
];

const PostsPage = () => {
  const router = useRouter();
    const {data:session} = useSession();
  return (
    <div >
    <AppBar title = "Posts"></AppBar>
    <div className = "bg-blue-100 text-slate-800 container mx-auto px-4 py-16">
      

      {session && session.user? (<h2 className='text-xl font-semibold mb-4'>Hi {session?.user?.name}</h2>) : <></>}
      <div className='bg-blue-300 flex flex-col items-center justify-items-center rounded-lg shadow-md p-4 items-center my-4'>
        <h3 className = "text-xl font-bold my-3">Add your daily post</h3>
        <button onClick = {()=> router.push('/upload')}className = "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add a new post</button></div>
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-start">
              <div>
                <p className="text-gray-500">{post.username}</p>
              </div>
            </div>
            <img src = "https://images.unsplash.com/photo-1496692052106-d37cb66ab80c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZyZWV8ZW58MHx8MHx8fDA%3D"
            ></img>
            <p className="mt-2">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default PostsPage;