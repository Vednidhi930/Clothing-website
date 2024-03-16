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
  const[error,setError]=useState({})
  

  const handlechange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userdata, [name]: value });
  };

  const handlesubmit = (e) => {
    

    let showerrormsg={}

     

    // for username validation

    if(userdata.username==""){
           showerrormsg.username="Please Enter Username"
    }else if(userdata.username.length<=4){
           showerrormsg.username="Username should have atleast 5 character"
    }else if(userdata.username.search(/[0-9]/)==-1){
           showerrormsg.username="Username Contains atleast one number"
    }else if(userdata.username.search(/["@","#"."$","&","*"]/)==-1){
     
      showerrormsg.username="username contains atleast one special character"
    }else{
      setError({username:""})
    }
     
    // For phone number validation

    if(userdata.phone===""){
      showerrormsg.phone="Please Enter phone number"
    }else if(isNaN(userdata.phone)){
      showerrormsg.phone="It accepts Only digit"
    }else if(userdata.phone.length>10){
      showerrormsg.phone="Phone no should only 10 digit"
    }else{
      setError({phone:""})
    }

    // for passowrd validation

    if(userdata.password===""){
      showerrormsg.password="Please Enter your Password"
    }else if(userdata.password.length<8){
      showerrormsg.password="Password should contain 8 character"
    }else if(userdata.password.search(/["@","#"."$","&","*"]/)==-1){
         showerrormsg.password="Password should contain at least one special character"
    }else if(userdata.password.search(/[0-9]/)==-1){
      showerrormsg.password="Password Should Contain at least one digit"
    }else{
      setError({password:""})
    }

    // for Email validation
    if(userdata.email===""){
      showerrormsg.email="Please Enter Email"
    }else if(userdata.email.indexOf("@")===0){
      showerrormsg.email="Invalud position of @"
    }else if(!userdata.email.includes("@")){
        showerrormsg.email="Invalid Email"
    }else if(userdata.email.charAt(userdata.email.length-4)!=="." && userdata.email.charAt(userdata.email.length-3)!=="."){
        showerrormsg.email="Invalid Email"
    }
    else{
      setError({email:""})
    }

    setError(showerrormsg)

    e.preventDefault();


     createUserWithEmailAndPassword(auth, userdata.email, userdata.password)
      .then((res) => {
        navigateLogin("/") 
        const user =res.user;
       
        updateProfile(user,{
            displayName:userdata.username
        })
        toast.success("Registration Successfully")
        setUserData("")
      })
      .catch((err) => {
        const error=err.message;
        toast.error(error)
      });

    
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
                <span className="text-xl text-red-500 ">{error.username}</span>
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
                <span className="text-xl text-red-500 ">{error.email}</span>
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
                <span className="text-xl text-red-500 ">{error.phone}</span>
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
                <span className="text-xl text-red-500 ">{error.password}</span>
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
