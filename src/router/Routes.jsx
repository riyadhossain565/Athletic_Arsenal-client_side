import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import AddEquipment from "../Pages/AddEquipment";
import SignIn from "../Pages/SignIn";
import Register from "../Pages/Register";
import AllEquipment from "../Pages/AllEquipment";
import ViewDetails from "../Pages/ViewDetails";
import MyEquipment from "../Pages/MyEquipment";
import UpdateDetails from "../Pages/UpdateDetails";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/equipment/home"),
      },
      {
        path: "/all-equipment",
        element: <AllEquipment />,
        loader: () => fetch("http://localhost:5000/equipment"),
      },
      {
        path: "/add-equipment",
        element: (
          <PrivateRoute>
            <AddEquipment />
          </PrivateRoute>
        ),
      },
      {
        path: "/view-details/:id",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/equipment/${params.id}`),
      },
      {
        path: "/my-equipment/update-details/:id",
        element: (
          <PrivateRoute>
            <UpdateDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/equipment/${params.id}`),
      },
      {
        path: "/my-equipment",
        element: (
          <PrivateRoute>
            <MyEquipment />
          </PrivateRoute>
        ),
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
