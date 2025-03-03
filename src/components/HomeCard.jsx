// import React from 'react';

// export const HomeCard = ({ product }) => {
//   const { name, price, image } = product;
  
//   return (
//     <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
//       {/* Image */}
//       <img className="w-40 h-40 object-cover  mx-auto rounded-t-lg" src={image} alt={name} />
      
//       {/* Content */}
//       <div className="p-5 text-center">
//         <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
//         <div className="flex flex-col items-center">
//           <span className="text-2xl font-bold text-gray-900 dark:text-white">${price}</span>
//           <a href="#" className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//             Add to cart
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };




export const HomeCard = ({ product }) => {
  const { name, price, image } = product;
  return (
    <div className="w-1/2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-4">
      {/* Set a fixed size for the image */}
      <img className="w-40 h-40 object-cover mx-auto rounded-" src={image} alt={name} />

      <div className="p-4">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <span className="text-lg font-bold text-gray-900 dark:text-white">${price}</span>
        <div className="mt-3 flex justify-end">
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

