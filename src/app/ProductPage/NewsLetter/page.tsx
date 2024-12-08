"use client";

import React from "react";
import Image from "next/image";

const NewsletterInstagram: React.FC = () => {
  return (
    <section className="bg-gray-400 text-white py-12">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">Or Subscribe To The Newsletter</h2>
        <form
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for subscribing!");
          }}
        >
          <input
            type="email"
            placeholder="Email Address..."
            className="w-full sm:w-auto px-4 py-2 bg-transparent border-b border-white focus:outline-none placeholder-black"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-teal-600 text-white font-semibold rounded hover:bg-teal-700 transition"
          >
            SUBMIT
          </button>
        </form>
      </div>

      {/* Instagram Section */}
      <div className="container mx-auto px-4 mt-12 text-center">
        <h2 className="text-2xl font-bold mb-6">
          Follow Products And Discounts On Instagram
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {["/product1.jpg", "/product2.jpg", "/product3.jpg", "/product4.jpg", "/product5.jpg"].map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <Image
                src={image}
                alt={`Instagram product ${index + 1}`}
                width={300}
                height={160}
                className="w-full h-40 object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsletterInstagram;
