"use client"
import Link from "next/link";
import { useState } from "react";
import { FaHeart, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image"; // Correct import for Next.js images
import img1 from "../assests/navbar-brand.png"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo Section */}
        <div className="flex items-center space-x-5">
          <Image 
            src={img1} // Ensure the image is in the public folder
            alt="Bandage Logo"
            width={140} // Adjust width
            height={90} // Adjust height
            className="object-contain ml-6"
          />
          {/* <span className="text-xl font-bold hidden sm:block">BrandName</span> */}
        </div>

        {/* Desktop Links Section */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600">
          <Link href="/">Home</Link>
          </li>
          <li className="hover:text-blue-600">
          <Link href="/Shop">Shop</Link>
          </li>
          <li className="hover:text-blue-600">
          <Link href="/About">About</Link>
          </li>
          <li className="hover:text-blue-600">
            <a href="#">Blog</a>
          </li>
          <li className="hover:text-blue-600">
            <Link href="/Contact">Contact</Link>
          </li>
        

<li className="hover:text-blue-600">
  <Link href="#">Pages</Link>
</li>
        </ul>

        {/* Button & Icons Section */}
        <div className="flex items-center space-x-4">
          {/* Login/Register */}
          <button className="hidden md:flex items-center space-x-2 bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700">
            <FaUser />
            <span>Login</span>
          </button>
          <button className="hidden md:flex bg-gray-100 text-blue-600 px-3 py-1 rounded-md hover:bg-gray-200">
            Register
          </button>

          {/* Icons */}
          <FaSearch className="text-gray-600 w-5 h-5 cursor-pointer hover:text-blue-600" />
          <FaShoppingCart className="text-gray-600 w-5 h-5 cursor-pointer hover:text-blue-600" />
          <FaHeart className="text-gray-600 w-5 h-5 cursor-pointer hover:text-blue-600" />

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <AiOutlineClose className="w-6 h-6" />
            ) : (
              <AiOutlineMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100 p-4">
          <ul className="space-y-2 text-gray-700 font-medium">
            <li className="hover:text-blue-600">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-blue-600">
              <a href="#">Shop</a>
            </li>
            <li className="hover:text-blue-600">
              <a href="#">About</a>
            </li>
            <li className="hover:text-blue-600">
              <a href="#">Blog</a>
            </li>
            <li className="hover:text-blue-600">
              <a href="#">Contact</a>
            </li>
            <li className="hover:text-blue-600">
              <a href="#">Pages</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
