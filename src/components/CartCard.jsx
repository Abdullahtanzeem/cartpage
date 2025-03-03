import React from 'react';

export const CartCard = ({ product }) => {
  const { name, price, image } = product;

  return (
    <div className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-sm p-4 md:max-w-xl dark:border-gray-700 dark:bg-gray-800">
      <img
        className="object-cover w-48 h-32 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={image}
        alt={name}
      />
      <div className="flex flex-col p-4 leading-normal w-full">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <span className="text-lg text-gray-700 dark:text-gray-300">Price: ${price}</span>

        {/* Ensure button is visible */}
        <div className="mt-3">
        <button className="text-white bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg shadow-lg">
        Remove
        </button>

        </div>
      </div>
    </div>
  );
};
