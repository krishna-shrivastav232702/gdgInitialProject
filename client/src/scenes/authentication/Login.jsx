import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'


const Login = () => {
  const { login } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password).then((userCredential) => {
      alert("Login Successfull");
      navigate("/", { replace: true });
    }).catch((error) => {
      alert("Incorrect Password");
      setError(error.message);
    })

  };


  return (

    <div className="h-screen flex items-center justify-center bg-darkBlue">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg shadow-lg rounded-lg w-full max-w-md p-8 border border-gray-200 border-opacity-20">
        <h1 className="text-2xl font-bold text-center text-white mb-6">Login</h1>

        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <label className="flex flex-col">
            <span className="text-white mb-1">Email</span>
            <input type="email" name="email" placeholder="Enter your email" className="p-3 bg-transparent text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white" />
          </label>
          <label className="flex flex-col">
            <span className="text-white mb-1">Password</span>
            <input type="password" name="password" placeholder="Enter your password" className="p-3 bg-transparent text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white" />
          </label>
          <div className='text-center'>
            <button type="submit" className="text-darkBlue bg-white hover:bg-navyBlue hover:text-white px-4 py-2 rounded-2xl transition duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105 ">
              Login
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Login