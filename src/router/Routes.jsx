import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import AddEquipment from "../Pages/AddEquipment";
import SignIn from "../Pages/SignIn";
import Register from "../Pages/Register";
import AllEquipment from "../Pages/AllEquipment";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/equipment"),
      },
      {
        path: "/all-equipment",
        element: <AllEquipment />,
        loader: () => fetch("http://localhost:5000/equipment"),
      },
      {
        path: "/add-equipment",
        element: <AddEquipment />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default Routes;
