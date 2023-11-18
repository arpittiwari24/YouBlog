'use client'

import Link from "next/link";
import React, {useState, useEffect} from "react";

export default function Home() {
  const [videoURL, setVideoURL] = useState<string>('')
  const [gotBlog, setGotBlog] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("")
  const [blog, setBlog] = useState<string>("")

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoURL(event.target.value);
  };
  useEffect(() => {
    const textarea = document.getElementById('response');
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [content]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setGotBlog(false)
    try {
      const response = await fetch('http://localhost:5000/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ videoURL }),
      });

      if (response.ok) {
        setGotBlog(true)
        const data = await response.json();
        var firstAsterisksIndex = data.indexOf("**");
        var secondAsterisksIndex = data.indexOf("**", firstAsterisksIndex + 2);
        var extractedString = data.substring(firstAsterisksIndex + 2, secondAsterisksIndex);
        var restString = data.substring(secondAsterisksIndex+2)
        setTitle(extractedString)
        setContent(restString)
        setBlog(data)
      } else {
        console.error('Failed to Generate Blog');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
    <div className="flex items-center justify-center py-10">
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            value={videoURL}
            onChange={handleInputChange}
            placeholder="Enter the URL"
            className="w-full p-2 rounded border border-gray-300 focus:ring focus:ring-blue-300 focus:outline-none"
          />
          <button type="submit" className="w-full mt-2 bg-blue-500 text-white py-2 rounded">
            Generate Blog
          </button>
        </form>
        </div>
        </div>
        {gotBlog && (
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <input type="text" value={title} className=" text-center w-full p-2 mb-2 border border-gray-300 rounded" />

            <textarea
              id="response"
              value={content}
              className="w-full p-2 mb-4 border border-gray-300 rounded "
            />

           <div className="flex flex-row items-center justify-center gap-6">
           <button
              onClick={() => navigator.clipboard.writeText(blog)}
              className="bg-green-500 text-white py-2 px-4 rounded"
            >
              Copy
            </button>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Refresh
            </button>
            <Link
              href="/blog"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
            Blog Section
            </Link>
           </div>
          </div>
        )}
    </>
  )
}
