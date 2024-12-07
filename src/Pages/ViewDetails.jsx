import { useLoaderData } from "react-router-dom";

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
    <div className="w-3/5 mx-auto bg-[#F4F3F0] flex gap-12 items-center px-14 py-10 my-8">
      <figure>
        <img src={image} alt="coffee_img" />
      </figure>
      <div>
        {/* <h3 className="text-2xl font-bold rancho-font text-[#331A15] my-4">
            Niceties
          </h3> */}
        <p>
          <strong>Item-Name : </strong>
          {itemName}
          {/* <div className="badge badge-secondary">{stockStatus}</div> */}
        </p>
        <p>
          <strong>Category : </strong>
          {category}
        </p>
        <p>
          <strong>Price : </strong>
          {price}
        </p>
        <p>
          <strong>Rating : </strong>
          {rating}
        </p>
        <p>
          <strong>customization : </strong>
          {customization}
        </p>

        <p>
          <strong>processingTime : </strong>
          {processingTime}
        </p>
        <p>
          <strong>description : </strong>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ViewDetails;
