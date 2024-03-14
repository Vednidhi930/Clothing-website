import React, { useState } from 'react'
import shopIcon from "./Images/online-shopping.png";
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "./Firebase/Firebase";
import { toast } from 'react-toastify';

const Login = () => {
    // const navigateHome=useNavigate();
    // const [userdata, setUserData] = useState({
    //   email: "",
    //   password: "",
    // });
  
    // const handlechange = (e) => {
    //   let name = e.target.name;
    //   let value = e.target.value;
    //   setUserData({ ...userdata, [name]: value });
    // };
  
    // const handlesubmit = (e) => {
    //   e.preventDefault();
    //   signInWithEmailAndPassword(auth, userdata.email, userdata.password)
    //     .then((res) => {
    //         navigateHome("/")
    //         toast.success("Login Successfully")
    //     })
    //     .catch((err) => {
    //       toast.error(err.message);
    //     });

       
    //   //console.log(userdata)
    // };
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
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handlesubmit}>
            <div>
              <label htmlFor="email" className="block text-2xl font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={handlechange}
                  className="block w-full h-12 ps-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-2xl sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-2xl font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="text"
                  autoComplete="current-password"
                  onChange={handlechange}
                  className="block w-full h-12 ps-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-2xl sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full h-12 justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-2xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-xl text-gray-500">
            Not a member?{' '}
            <NavLink to="/Signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 text-xl">
             Signup here
            </NavLink>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login
