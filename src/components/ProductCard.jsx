import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {

  const {_id, image, itemName, category, price, stockStatus } = item;
  return (
    <div>
      <div className="max-w-sm mx-auto border border-gray-200 rounded-lg shadow-lg">
        <img
          className="w-full h-48 object-cover rounded-t-lg"
          src={image}
          alt="Anti-Gravity Yoga Mat"
        />
        <div className="p-6">
          <h2 className="text-xl font-bold">
            {itemName}{" "}
            <div className="badge badge-primary">{stockStatus}</div>
          </h2>
          <p className=" mt-1">
            <span className="text-lg font-semibold">Category : </span>
            {category}
          </p>
          <p className=" mt-1">
            <span className="text-lg font-semibold"> Price : </span>${price}
          </p>
          <Link to={`/view-details/${item._id}`}>
          <button className="mt-4 w-full py-2 px-4 rounded-lg text-white font-medium transition bg-[#007bff] hover:bg-[#0056b3]">
            View Details
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
