import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import logo from "../assets/logo/logo-1.png";
import { Tooltip } from 'react-tooltip'


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
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-[#ff5209] underline"
              : " hover:text-[#ff5209] transition-all"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-equipment"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-[#ff5209] underline"
              : " hover:text-[#ff5209] hover:bg-none transition-all"
          }
        >
          All Sports Equipment
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/add-equipment"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-[#ff5209] underline"
                : "hover:text-[#ff5209] hover:bg-none transition-all"
            }
          >
            Add Equipment
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            to="/my-equipment"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-[#ff5209] underline"
                : "hover:text-[#ff5209] hover:bg-none transition-all"
            }
          >
            My Equipment List{" "}
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar w-11/12 mx-auto px-8 text-[#ecf0f1]">
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
            className="menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="flex items-center">
          <img className="w-16" src={logo} alt="Logo Image" />
          <span className="text-2xl font-bold caveat-font hover:text-[#e74c3c] transition-all">
            Athletic Arsenal
          </span>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 gap-4">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
            <div className="flex items-center gap-4">
            {userData && (
              <>
                <img
                  id="userAvatar"
                  className="w-10 h-10 rounded-full cursor-pointer"
                  src={userData.image}
                  alt="User Profile"
                />
                <Tooltip
                  anchorId="userAvatar"
                  place="bottom"
                  content={userData.name || "User"}
                />
              </>
            )}
            <button
              onClick={handleSignOut}
              className="border border-[#e74c3c] rounded-md px-4 py-2 font-bold bg-[#e74c3c] text-white hover:border-[#c0392b] hover:bg-[#c0392b] hover:text-[#ecf0f1]"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <NavLink
            to="/signin"
            className="border border-[#e74c3c] rounded-md px-4 py-2 font-bold bg-[#e74c3c] text-white hover:border-[#c0392b] hover:bg-[#c0392b] hover:text-[#ecf0f1]"
          >
            SignIn
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
