import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const AllEquipment = () => {
  const items = useLoaderData();
  const [sortItems, setSortItems] = useState([items]);
  const [isAscending, setIsAscending] = useState(true);

  return (
    <div className="w-5/6 mx-auto px-8">
      <div className="w-3/4 mx-auto my-8">
        <Fade direction="down">
        <h1 className="text-3xl font-bold text-center caveat-font">
          Comprehensive Sports Equipments
        </h1>
        </Fade>
        <Fade direction="up">
        <p className="text-center my-4">
          At our sports equipment store, we offer a wide range of high-quality
          gear to meet the needs of athletes at all levels. Whether you're into
          team sports, individual fitness, or outdoor adventures, we have
          everything you need to perform your best.
        </p>
        </Fade>
      </div>
      <div className="ml-16 mb-12 overflow-x-auto">
        <div className="flex justify-end"><button className="btn">Sort By Price</button></div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <th>{index+1}</th>
                <td>{item.itemName}</td>
                <td>{item.category}</td>
                <td>{item.price}$</td>
                <td>{item.rating}</td>
                <td>
                  <Link
                    to={`/view-details/${item._id}`}
                    className="btn rounded-lg text-white bg-[#ff5209] hover:text-[#ff5209] hover:bg-white hover:underline"
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
