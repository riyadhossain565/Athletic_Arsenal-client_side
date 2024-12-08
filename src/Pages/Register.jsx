import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [errorPassword, setErrorPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      setErrorPassword("Password must contain at least 6 characters");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setErrorPassword("Password must contain at least one lowercase letter");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setErrorPassword("Password must contain at least one uppercase letter ");
      return;
    }

    const form = { name, email, image, password };
    console.log(form);

    // create user
    createUser(email, password)
      .then((result) => {
        e.target.reset();
        console.log(result.user);
        const newUser = { name, email, image };

        // save new user info to the database
        fetch("https://athletic-arsenal-server.vercel.app/users/", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("user created to DB", data);
            if (data.insertedId) {
              navigate("/");
              Swal.fire({
                icon: "success",
                title: "Congratulation",
                text: "Registation Successful!!",
              });
            }
          });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        const { displayName, email, photoURL } = result.user;
        const newUser = { name: displayName, email, image: photoURL };
        // save new user info to the database
        fetch("https://athletic-arsenal-server.vercel.app/users/", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                icon: "success",
                title: "Congratulation",
                text: "Registation Successful!!",
              });
            }
          });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 pb-12">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md my-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 caveat-font">
          Register Now!
        </h2>
        <form onSubmit={handleRegister}>
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Photo URL Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              type="url"
              name="image"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter photo URL"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6 relative">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-9 right-3 text-gray-500 hover:text-blue-500 focus:outline-none"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          {/* Password Error Message */}
          {errorPassword && (
            <div className="text-red-500 text-sm mb-4">{errorPassword}</div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-4 text-md text-gray-500">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* google sign up */}
        <p className="text-center ">
          <button onClick={handleGoogleSignIn} className="btn btn-outline">
            Sign up with Google
          </button>
        </p>

        {/* Link to Login Page */}
        <div className="mt-4 text-center text-sm text-gray-600">
          <p>
            Already have an account?
            <Link to="/signin" className="text-blue-500 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
