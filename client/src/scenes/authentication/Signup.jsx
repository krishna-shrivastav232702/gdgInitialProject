import React, { useContext, useState } from 'react';
import { AuthContext } from "../../context/AuthProvider";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [Role, setRole] = useState('');

  const handleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const role = form.role.value;
    const state = form.state.value;

    try {
      const userCredential = await createUser(email, password);
      const firebaseUser = userCredential.user;

      const userData = {
        uid: firebaseUser.uid,
        email,
        password,
        name,
        role,
        state,
      };

      await axios.post("http://localhost:7001/apiUser/user", userData, {
        headers: {
          Authorization: `Bearer ${await firebaseUser.getIdToken()}`
        }
      });

      alert("Sign up successful");
      navigate("/", { replace: true });
    } catch (error) {
      setError( error.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-darkBlue">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg shadow-lg rounded-lg w-full max-w-md p-8 border border-gray-200 border-opacity-20">
        <h1 className="text-2xl font-bold text-center text-white mb-6">Sign Up</h1>

        <form onSubmit={handleSignup} className="flex flex-col space-y-4">
          <label className="flex flex-col">
            <span className="text-white mb-1">Name</span>
            <input type="text" name="name" placeholder="Enter your name" className="p-3 bg-transparent text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white" />
          </label>

          <label className="flex flex-col">
            <span className="text-white mb-1">Email</span>
            <input type="email" name="email" placeholder="Enter your email" className="p-3 bg-transparent text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white" />
          </label>

          <label className="flex flex-col">
            <span className="text-white mb-1">Password</span>
            <input type="password" name="password" placeholder="Enter your password" className="p-3 bg-transparent text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white" />
          </label>

          <label className="flex flex-col">
            <span className="text-white mb-1">Role</span>
            <select id="Role" value={Role} onChange={handleChange} name="role" className="p-3 bg-transparent text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ">
              <option value="" className='text-black'>--Select Role--</option>
              <option value="user" className='text-black'>User</option>
              <option value="admin" className='text-black'>Admin</option>
            </select>
          </label>

          <label className="flex flex-col">
            <span className="text-white mb-1">State</span>
            <input type="text" name="state" placeholder="Enter your state" className="p-3 bg-transparent text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white" />
          </label>
          <div className='text-center'>
            <button type="submit" className="text-darkBlue bg-white hover:bg-navyBlue hover:text-white px-4 py-2 rounded-2xl transition duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105 ">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
