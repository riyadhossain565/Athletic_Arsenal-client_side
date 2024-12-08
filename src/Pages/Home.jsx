import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Categories from "../components/Categories";

const Home = () => {
  const loadedEquipment = useLoaderData();
  return (
    <div>
      <Slider></Slider>
      <Categories></Categories>
      <Products loadedEquipment={loadedEquipment}></Products>
    </div>
  );
};

export default Home;
