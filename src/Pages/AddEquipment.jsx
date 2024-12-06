import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/users/${user.email}`)
        .then((res) => res.json())
        .then((data) => setUserData(data))
        .catch((error) => {
          console.log("Error data:", error);
          setUserData(null);
        });
    }
  }, [user]);

  const handleAddItems = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = userData?.name;
    const email = userData?.email;
    const itemName = form.itemName.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const image = form.image.value;
    const stockStatus = form.stockStatus.value;
    const description = form.description.value;

    const newEquipment = {
      name,
      email,
      itemName,
      category,
      price,
      rating,
      customization,
      processingTime,
      image,
      stockStatus,
      description,
    };

    console.log(newEquipment);
    event.target.reset();

    // send data to the server
    fetch("http://localhost:5000/equipment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "New Sports Equipment Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
      <div className="bg-white w-full max-w-4xl p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Add New Equipment
        </h2>

        <form className="space-y-6" onSubmit={handleAddItems}>
          {/* row-1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* User Name (Read-Only) */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                User Name
              </label>
              <input
                type="text"
                value={userData?.name}
                readOnly
                className="w-full px-4 py-3 border-2 border-gray-300 bg-gray-100 rounded-lg cursor-not-allowed"
              />
            </div>

            {/* User Email (Read-Only) */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                User Email
              </label>
              <input
                type="email"
                value={userData?.email}
                readOnly
                className="w-full px-4 py-3 border-2 border-gray-300 bg-gray-100 rounded-lg cursor-not-allowed"
              />
            </div>
          </div>

          {/* row-2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Item Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Item Name
              </label>
              <input
                type="text"
                name="itemName"
                placeholder="Enter item name"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Category Name */}
            <div>
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="categoryName"
              >
                Category Name
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter category name"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* row-3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Price */}
            <div>
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="price"
              >
                Price ($)
              </label>
              <input
                type="text"
                name="price"
                placeholder="Enter price"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Rating */}
            <div>
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="rating"
              >
                Rating (1-5)
              </label>
              <input
                type="text"
                name="rating"
                placeholder="Enter rating"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* row-4 */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Customization */}
            <div>
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="customization"
              >
                Customization
              </label>
              <input
                type="text"
                name="customization"
                placeholder="Enter customization details"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Processing Time */}
            <div>
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="processingTime"
              >
                Processing Time
              </label>
              <input
                type="text"
                name="processingTime"
                placeholder="Enter processing time"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* row-5 */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Image Upload */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Photo Url
              </label>
              <input
                type="text"
                name="image"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter Photo Url"
              />
            </div>

            {/* Stock Status */}
            <div>
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="stockStatus"
              >
                Stock Status
              </label>
              <input
                type="text"
                name="stockStatus"
                placeholder="Enter available quantity"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter item description"
              rows="4"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold focus:outline-none"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEquipment;
