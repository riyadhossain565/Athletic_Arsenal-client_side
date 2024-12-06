import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";
import Products from "../components/Products";

const Home = () => {
  const loadedEquipment = useLoaderData();
  return (
    <div>
      <Slider></Slider>
      <Products loadedEquipment={loadedEquipment}></Products>
    </div>
  );
};

export default Home;
