"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";


const SigninButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <button onClick={() => signOut()} className="bg-blue-700 text-white py-2 px-6 rounded-full text-lg md:text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105">
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <button onClick={() => signIn("google")} className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg md:text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105">
      Sign In
    </button>
  );
};

export default SigninButton;