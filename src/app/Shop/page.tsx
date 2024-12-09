import React from "react";
import Image from "next/image"; // Import Next.js Image component
import Productshort from "@/components/Productshort";

const ShopSection = () => {
  const categories = [
    { id: 1, name: "CLOTHS", items: 5, image: "/fixed-height (2).png" },
    { id: 2, name: "CLOTHS", items: 5, image: "/alex-haigh-fEt6Wd4t4j0-unsplash.jpg" },
    { id: 3, name: "CLOTHS", items: 5, image: "/fixed-height.png" },
    { id: 4, name: "CLOTHS", items: 5, image: "/fixed-height (4).png" },
    { id: 5, name: "CLOTHS", items: 5, image: "/fixed-height (1).png" },
  ];

  const logos = [
    "/fa-brands-2.png",
    "/fa-brands-3.png",
    "/fa-brands-3.png",
    "/fa-brands-4.png",
    "/fa-brands-5.png",
    "/fa-brands-6.png",
  ];

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold">Shop</h2>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group hover:shadow-lg transition"
            >
              <Image
                src={category.image}
                alt={category.name}
                width={500} // Adjust width as needed
                height={300} // Adjust height as needed
                className="h-48 w-full object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-white text-lg font-bold">{category.name}</h3>
                <p className="text-white">{category.items} Items</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="mt-8 flex justify-between items-center">
          <p className="text-gray-600">Showing all 12 results</p>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <button className="p-2 border rounded-md hover:bg-gray-200">
                <i className="fas fa-th"></i>
              </button>
              <button className="p-2 border rounded-md hover:bg-gray-200">
                <i className="fas fa-list"></i>
              </button>
            </div>
            <select
              className="border px-4 py-2 rounded-md"
              defaultValue="popularity"
            >
              <option value="popularity">Popularity</option>
              <option value="rating">Rating</option>
              <option value="new">Newest</option>
            </select>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Filter
            </button>
          </div>
        </div>

        {/* Brand Logos */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                src={logo}
                alt="Brand Logo"
                width={100} // Adjust width as needed
                height={50} // Adjust height as needed
                className="h-12"
              />
            </div>
          ))}
        </div>
      </div>
      <Productshort />
    </div>
  );
};

export default ShopSection;
