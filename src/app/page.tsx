'use client'
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [videoURL, setVideoURL] = useState<string>('')
  const [blog, setBlog] = useState<string>('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoURL(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ videoURL }),
      });

      if (response.ok) {
        const data = await response.json();
        setBlog(data);
      } else {
        console.error('Failed to Generate Blog');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full max-sm:w-2/3 max-w-sm">
    <div className="flex flex-col mb-4 pt-10">
      <input
        type="text"
        value={videoURL}
        onChange={handleInputChange}
        placeholder="Enter the URL"
        className="mt-1 p-2 rounded border border-gray-300 focus:ring focus:ring-blue-300 focus:outline-none"
      />
    </div>
    <button type="submit" className="btn btn-success w-full py-2">Generate Blog</button>
  </form>
  <div>
    <p>{blog}</p>
  </div>
  <Link href="/blog">Blog</Link>
    </>
  )
}
