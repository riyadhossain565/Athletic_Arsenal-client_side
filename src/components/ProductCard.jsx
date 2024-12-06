import React from "react";

const ProductCard = ({ item }) => {
  const { image, itemName, category, price, stockStatus } = item;
  return (
    <div>
      <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg">
        <img
          className="w-full h-48 object-cover rounded-t-lg"
          src={image}
          alt="Anti-Gravity Yoga Mat"
        />
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800">
            {itemName}{" "}
            <div className="badge badge-secondary">{stockStatus}</div>
          </h2>
          <p className="text-gray-800 mt-1">
            <span className="text-lg font-semibold">Category : </span>
            {category}
          </p>
          <p className="text-gray-800  mt-1">
            <span className="text-lg font-semibold"> Price : </span>${price}
          </p>
          <button className="mt-4 w-full py-2 px-4 rounded-lg text-white font-medium transition bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
