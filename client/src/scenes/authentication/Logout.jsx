import React,{useContext} from 'react'
import {AuthContext} from "../../context/AuthProvider"
import {useLocation,useNavigate} from "react-router-dom"


const Logout = () => {
  const {logout} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleLogout = ()=>{
    logout().then(()=>{
      alert("Sign out successfull");
      navigate("/",{replace:true});
    }).catch((error)=>{
      console.error(`Error: ${error.message}`);
    })
  }

  return (
    <div className='h-screen bg-darkBlue flex items-center justify-center'>
      <button className='text-darkBlue bg-white font-bold p-2 rounded-2xl hover:bg-darkBlue hover:text-white transition duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105 mr-4' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout