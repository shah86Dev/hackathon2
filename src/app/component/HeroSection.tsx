import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className="flex items-center justify-between bg-gray-400 p-8 pr-40 pl-40 ">
      {/* Left Side: Text */}
      <div className="max-w-lg">
        <p className="text-sm font-medium text-gray-500">WELCOME TO CHAIRY</p>
        <h1 className="mt-2 text-4xl font-bold text-gray-900">
          Best Furniture Collection For Your Interior.
        </h1>
        <button className="mt-4 rounded-lg bg-teal-500 px-6 py-3 text-white hover:bg-teal-600">
          Shop Now →
        </button>
      </div>

      {/* Right Side: Chair Image */}
      <div>
        <Image
          src="/images/Pimage.png"  
          alt="Chair"
          width={320}
          height={320}
          className="h-auto max-w-xs rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}

