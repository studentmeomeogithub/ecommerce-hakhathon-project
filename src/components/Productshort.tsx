// components/Products.js
import React from 'react';

const Products = () => {
  const products = [
    {
      image: '/fixed-height (1).png',
      title: 'Graphic Design',
      department: 'English Department',
      price: 16.48,
      discountedPrice: 6.48,
      colors: ['#0000FF', '#FF0000', '#00FF00', '#FFA500'],
    },
    {
      image: '/fixed-height (2).png',
      title: 'Graphic Design',
      department: 'English Department',
      price: 16.48,
      discountedPrice: 6.48,
      colors: ['#0000FF', '#FF0000', '#00FF00', '#FFA500'],
    },
    {
      image: '/fixed-height (3).png',
      title: 'Graphic Design',
      department: 'English Department',
      price: 16.48,
      discountedPrice: 6.48,
      colors: ['#0000FF', '#FF0000', '#00FF00', '#FFA500'],
    },
    {
      image: '/fixed-height (4).png',
      title: 'Graphic Design',
      department: 'English Department',
      price: 16.48,
      discountedPrice: 6.48,
      colors: ['#0000FF', '#FF0000', '#00FF00', '#FFA500'],
    },
    {
      image: '/fixed-height.png',
      title: 'Graphic Design',
      department: 'English Department',
      price: 16.48,
      discountedPrice: 6.48,
      colors: ['#0000FF', '#FF0000', '#00FF00', '#FFA500'],
    },
    {
      image: '/fixed-height (4).png',
      title: 'Graphic Design',
      department: 'English Department',
      price: 16.48,
      discountedPrice: 6.48,
      colors: ['#0000FF', '#FF0000', '#00FF00', '#FFA500'],
    },
    {
      image: '/card-item (3).png',
      title: 'Graphic Design',
      department: 'English Department',
      price: 16.48,
      discountedPrice: 6.48,
      colors: ['#0000FF', '#FF0000', '#00FF00', '#FFA500'],
    },
    {
      image: '/alex-haigh-fEt6Wd4t4j0-unsplash.jpg',
      title: 'Graphic Design',
      department: 'English Department',
      price: 16.48,
      discountedPrice: 6.48,
      colors: ['#0000FF', '#FF0000', '#00FF00', '#FFA500'],
    },
  ];

  return (
    <div className="p-8 bg-gray-100">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg p-4 flex flex-col items-center bg-white"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            {/* Product Info */}
            <h3 className="font-semibold text-lg text-center">
              {product.title}
            </h3>
            <p className="text-gray-500 text-sm text-center">
              {product.department}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="line-through text-gray-400">
                ${product.price}
              </span>
              <span className="text-green-600 font-bold">
                ${product.discountedPrice}
              </span>
            </div>

            {/* Color Options */}
            <div className="flex gap-1 mt-3">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="w-5 h-5 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 space-x-2">
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">
          First
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">1</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
