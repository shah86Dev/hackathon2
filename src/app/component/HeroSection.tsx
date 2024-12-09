import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between bg-gray-400 p-8 md:pr-40 md:pl-40">
      {/* Left Side: Text */}
      <div className="text-center md:text-left max-w-lg mt-6 md:mt-0">
        <p className="text-sm font-medium text-gray-500">WELCOME TO CHAIRY</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Best Furniture Collection For Your Interior.
        </h1>
        <button className="mt-4 rounded-lg bg-teal-500 px-6 py-3 text-white hover:bg-teal-600">
          Shop Now →
        </button>
      </div>

      {/* Right Side: Chair Image */}
      <div className="flex justify-center">
        <Image
          src="/images/Pimage.png"
          alt="Chair"
          width={320}
          height={320}
          className="h-auto w-auto max-w-xs md:max-w-sm rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
