import React from "react";
import { Link } from "react-router-dom";

const Equipment = ({ item }) => {
  const { _id, itemName, image, category, price } = item;
  return (
    <div>
      <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
        <img
          src={image}
          alt={itemName}
          className="h-40 w-full object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-700">{itemName}</h2>
          <p className="text-sm text-gray-500">Category: {category}</p>
          <p className="text-sm text-gray-500">Price: ${price}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Link
            to={`update-details/${_id}`}
            className="btn rounded-lg w-full bg-[#4cb666] text-xl text-white"
          >
            Update
          </Link>
          <button className="btn rounded-lg w-full bg-[#eb593f] text-xl text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
