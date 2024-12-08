import { useState } from "react";
import ProductCard from "./ProductCard";

const Products = ({ loadedEquipment }) => {
  const [items, setItems] = useState(loadedEquipment);
  return (
    <div className="w-11/12 mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-14">
      {items.map((item) => (
        <ProductCard key={item._id} item={item}></ProductCard>
      ))}
    </div>
  );
};

export default Products;
