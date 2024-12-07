import React from "react";

const Equipment = ({ item }) => {
  const { itemName, image, category, price } = item;
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
        <div className="flex justify-between gap-4 mt-4">
          <button
            // onClick={() => onUpdate(item)}
            className="px-4 py-2 bg-green-500 text-white rounded-md w-full hover:bg-green-600 transition duration-200"
          >
            Update
          </button>
          <button
            // onClick={() => onDelete(item._id)}
            className="px-4 py-2 bg-red-500 text-white rounded-md w-full hover:bg-red-600 transition duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
