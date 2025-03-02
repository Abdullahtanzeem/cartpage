import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-800 p-4">
  <div className="flex justify-between items-center max-w-screen-xl mx-auto">
    <span className="text-sm text-gray-500 dark:text-gray-400">
      © 2023 Flowbite™. All Rights Reserved.
    </span>
    <ul className="flex space-x-4 text-sm font-medium text-gray-500 dark:text-gray-400">
      <li><a href="#" className="hover:underline">About</a></li>
      <li><a href="#" className="hover:underline">Privacy Policy</a></li>
      <li><a href="#" className="hover:underline">Licensing</a></li>
      <li><a href="#" className="hover:underline">Contact</a></li>
    </ul>
  </div>
</footer>

  );
};


