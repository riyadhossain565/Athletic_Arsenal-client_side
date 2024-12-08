import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const loadedItem = useLoaderData();
  const {
    itemName,
    category,
    price,
    rating,
    customization,
    processingTime,
    image,
    stockStatus,
    description,
  } = loadedItem;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
      <div className="bg-white w-full max-w-4xl p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          {itemName}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Image */}
          <div className="flex items-center justify-center">
            <img
              src={image}
              alt={itemName}
              className="h-64 w-full object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Details */}
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Category : </span> {category}
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Price : </span> ${price}
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Rating : </span> {rating} ⭐
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Customization : </span>
              {customization}
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Processing Time : </span>
              {processingTime}
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Stock Status : </span>
              {stockStatus}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">Description : </h3>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Back to List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
