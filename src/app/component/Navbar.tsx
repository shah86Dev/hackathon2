"use client"; // Add this at the top

import { FC, useState } from "react";
import Image from "next/image";
import { ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-50 shadow-sm pr-40 pl-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Navbar */}
        <div className="flex justify-between items-center py-4">
          {/* Left - Brand Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/image/Logoi.png"
              alt="Comforty Logo"
              width={32}
              height={32}
            />
            <span className="text-lg font-semibold text-gray-900">Comforty</span>
          </div>

          {/* Right - Cart & Hamburger */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link href="/CartPage">
              <button className="relative hidden md:flex items-center bg-white border rounded-full px-4 py-2 shadow-sm hover:bg-gray-100">
                <ShoppingCart className="w-5 h-5 text-gray-800 mr-2" />
               <span className="text-gray-800 font-medium">Cart</span>
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-teal-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  2
                </span>
                
              </button>
            </Link>

            {/* Hamburger Menu */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Collapsible Menu */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:justify-between items-start md:items-center py-4 border-t border-gray-200`}
        >
          {/* Left Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 w-full md:w-auto">
            <Link
              href="/"
              className="text-gray-500 font-medium hover:text-teal-600 hover:underline"
            >
              Home
            </Link>
            <Link
              href="/ProductPage"
              className="text-gray-500 font-medium hover:text-teal-600 hover:underline"
            >
              Shop
            </Link>
            <Link
              href="/ProductPage"
              className="text-gray-500 font-medium hover:text-teal-600 hover:underline"
            >
              Product
            </Link>
            <Link
              href="/ContactUs"
              className="text-gray-500 font-medium hover:text-teal-600 hover:underline"
            >
              Pages
            </Link>
            <Link
              href="/AboutSection"
              className="text-gray-500 font-medium hover:text-teal-600 hover:underline"
            >
              About
            </Link>
          </div>

          {/* Right Contact */}
          <div className="mt-4 md:mt-0 w-full md:w-auto">
            <span className="text-gray-500 font-medium block md:inline">
              Contact:{" "}
              <a
                href="tel:+923002023688"
                className="text-gray-900 font-semibold hover:text-teal-500 hover:underline"
              >
                (+92) 300-202-3688
              </a>
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
