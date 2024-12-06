import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllEquipment = () => {
  const items = useLoaderData();

  return (
    <div className="w-5/6 mx-auto px-8">
      <div className="w-3/4 mx-auto my-8">
        <h1 className="text-3xl font-bold text-center">
          Comprehensive Sports Equipment for Every Athlete
        </h1>
        <p className="text-center my-4">
          At our sports equipment store, we offer a wide range of high-quality
          gear to meet the needs of athletes at all levels. Whether you're into
          team sports, individual fitness, or outdoor adventures, we have
          everything you need to perform your best.
        </p>
      </div>
      <div className="ml-16 mb-12 overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <th>1</th>
                <td>{item.itemName}</td>
                <td>{item.category}</td>
                <td>{item.price}$</td>
                <td>
                  <Link
                    to={`/view-details/${item._id}`}
                    className="btn rounded-lg text-white bg-[#EA4744]"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEquipment;
