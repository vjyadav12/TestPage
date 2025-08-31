import React from "react";

export default function BannerSection() {
  return (
    <div className="relative pt-[50px] pb-[50px]">
      {/* Parent div is relative */}
      <div className="relative bg-black text-white px-10 py-[100px] max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold">B2B Professional Clothing Mall!</h2>
        <h3 className="text-xl font-bold mt-2">
          Trust us with over 15 years of expertise
        </h3>
        <p className="text-gray-300 mt-4">
          Discover trusted shopping news chosen by countless companies
        </p>
      </div>

      {/* Button in parent div corner */}
      <button className="absolute bottom-8 right-8 bg-yellow-400 text-black font-bold w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-lg">
        Ch
      </button>
    </div>
  );
}
