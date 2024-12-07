import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Equipment from "../components/Equipment";

const MyEquipment = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/equipment/email/${user.email}`)
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Equipment</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-6">
        {items.map((item) => (
          <Equipment key={item._id} item={item}></Equipment>
        ))}
      </div>
    </div>
  );
};
export default MyEquipment;
