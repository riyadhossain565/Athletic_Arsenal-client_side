import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Equipment from "../components/Equipment";

const MyEquipment = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(
        `https://athletic-arsenal-server.vercel.app/equipment/email/${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setItems(data);
        })
        .catch((error) => {
          console.log("Error data", error);
          setItems([]);
        });
    }
  }, [user]);
  return (
    <div className="w-5/6 mx-auto my-12">
      <h1 className="text-3xl font-bold caveat-font  text-center mb-6">
        My Equipment
      </h1>
      <p className="text-center mb-8">
        Manage your collection effortlessly by checking item details, editing
        existing entries, <br /> or removing items no longer needed.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-6">
        {items.map((item) => (
          <Equipment
            key={item._id}
            item={item}
            items={items}
            setItems={setItems}
          ></Equipment>
        ))}
      </div>
    </div>
  );
};
export default MyEquipment;
