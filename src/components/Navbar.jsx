import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/users/${user.email}`)
        .then((res) => res.json())
        .then((data) => setUserData(data))
        .catch((error) => {
          console.log("Error data:", error);
          setUserData(null);
        });
    }
  }, [user]);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.log("ERROR:", error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-sports-equipment">All Sports Equipment</NavLink>
      </li>
      <li>
        <NavLink to="/add-equipment">Add Equipment</NavLink>
      </li>
      <li>
        <NavLink to="/all-sports-equipment">My Equipment List </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar w-11/12 mx-auto px-8 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="text-xl font-bold">
          Athletic Arsenal
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            {userData && (
              <img
                className="w-10 h-10 rounded-full mr-2"
                title={userData.name}
                src={userData.image}
                alt="User Profile"
              />
            )}
            <button onClick={handleSignOut} className="btn">
              Sign Out
            </button>
          </>
        ) : (
          <NavLink to="/signin" className="btn">
            SignIn
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
