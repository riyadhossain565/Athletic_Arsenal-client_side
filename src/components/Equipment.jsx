import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Equipment = ({ item, items, setItems }) => {
  const { _id, itemName, image, category, price } = item;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/equipment/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              // updated remaining item
              const remainingItems = items.filter((item) => item._id !== id);
              setItems(remainingItems);
            }
          });
      }
    });
  };
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
          <button
            onClick={() => handleDelete(_id)}
            className="btn rounded-lg w-full bg-[#eb593f] text-xl text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
