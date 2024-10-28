import React, { useContext, useState,useEffect } from 'react'
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';


const Navbar = () => {
  const location = useLocation();
  const { user, role } = useContext(AuthContext);
  console.log(role);
  const isAdmin = role === "admin";
  
  const navItems = [
    {
      link: "Home", path: "/"
    },
    {
      link: "Events", path: "/events"
    },
    {
      link: "About Me", path: "/about"
    },
    ...(isAdmin ? [{ link: "Admin", path: "/admin/dashboard" }] : [])
  ];

  const isAdminPath = location.pathname === "/admin" || location.pathname === "/signup" || location.pathname === "/login" || location.pathname === "/logout";


  if (isAdminPath) return null;

  
   


  return (

    <header className="w-full bg-darkBlue h-40 fixed top-0 left-0 right-0 transition-all ease-in duration-400 ">
      <nav className="px-28 mt-5">
        <div className="flex justify-between items-center py-4 rounded-3xl px-2 bg-white shadow-md">
          <Link
            to="/"
            className="relative inline-block text-black font-extrabold p-2  cursor-pointer overflow-hidden group  hover:text-darkBlue "
          >
            Eventure
            <span className="absolute left-0 bottom-0 h-1 w-full bg-darkBlue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>

          <ul className="flex space-x-8  font-semibold">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="relative inline-block text-base text-black px-2 py-1 mt-2  uppercase cursor-pointer overflow-hidden group"
                >
                  {link}
                  <span className="absolute left-0 bottom-0 h-1 w-full bg-darkBlue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>

          <div className='flex'>
            {
              user ? (<>
                <Link to="/logout" className='text-black font-semibold p-2 rounded-2xl hover:bg-darkBlue hover:text-white transition duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105 mr-4'>Logout</Link>
              </>) : (<>
                <Link to="/signup" className=" text-black font-semibold p-2 rounded-2xl hover:bg-darkBlue hover:text-white transition duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105 mr-4">
                  Signup
                </Link>
                <Link to="/login" className=" mx-2 text-black font-semibold p-2 rounded-2xl hover:bg-darkBlue hover:text-white transition duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105">
                  Login
                </Link>
              </>)
            }

          </div>
        </div>
      </nav>
    </header>


  )
}

export default Navbar