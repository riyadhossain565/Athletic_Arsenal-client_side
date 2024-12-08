import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Categories from "../components/Categories";
import WhyUs from "../components/WhyUs";

const Home = () => {
  const loadedEquipment = useLoaderData();
  return (
    <div>
      <Slider></Slider>
      <Categories></Categories>
      <Products loadedEquipment={loadedEquipment}></Products>
      <WhyUs></WhyUs>
    </div>
  );
};

export default Home;
