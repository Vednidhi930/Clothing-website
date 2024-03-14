import React, { useState } from "react";
import shopIcon from "./Images/online-shopping.png";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./Firebase/Firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const navigateLogin=useNavigate();
  const [userdata, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handlechange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userdata, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userdata.email, userdata.password)
      .then((res) => {
        const user =res.user;
       
        updateProfile(user,{
            displayName:userdata.username
        })
        toast.success("Registration Successfully")
      })
      .catch((err) => {
        const error=err.message;
        console.log(error);
      });

      navigateLogin("/")
    //console.log(userdata)
  };

  

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src={shopIcon}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register Your Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handlesubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-2xl font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  name="username"
                  value={userdata.username}
                  type="text"
                  autoComplete="email"
                  onChange={handlechange}
                  className="block w-full h-12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-2xl ps-2 sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-2xl font-medium leading-6 text-gray-900"
                >
                  Email Address
                </label>
              </div>
              <div className="mt-2">
                <input
                  name="email"
                  value={userdata.email}
                  type="text"
                  autoComplete="current-password"
                  onChange={handlechange}
                  className="block w-full h-12 rounded-md ps-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-2xl sm:leading-6"
                />
              </div>

              <label
                htmlFor="email"
                className="block text-2xl font-medium leading-6 text-gray-900 my-3"
              >
                Phone No.
              </label>
              <div className="mt-3">
                <input
                  name="phone"
                  value={userdata.phone}
                  type="text"
                  autoComplete="email"
                  onChange={handlechange}
                  className="block w-full h-12 rounded-md ps-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-2xl sm:leading-6"
                />
              </div>

              <label
                htmlFor="email"
                className="block text-2xl font-medium leading-6 text-gray-900 my-2"
              >
                Password
              </label>
              <div className="mt-3">
                <input
                  name="password"
                  value={userdata.password}
                  type="text"
                  autoComplete="email"
                  onChange={handlechange}
                  className="block w-full h-12 rounded-md ps-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-2xl sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full h-12 justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-2xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >

                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
