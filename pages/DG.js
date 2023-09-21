
import React from "react";
import { useRouter } from "next/router";
import 'tailwindcss/tailwind.css';



const DG = () => {
  const router = useRouter();

  return (

    <>
    <div className="container mx-auto">
      <h1 className="text-center">Welcome to my Next.js app!</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => router.push("/about")}>
        Learn more
      </button>
    </div>
  

    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
    </>

  );
};

export default DG;
