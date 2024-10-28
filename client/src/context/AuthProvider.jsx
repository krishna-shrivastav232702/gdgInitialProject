import React, { createContext, useState, useEffect } from 'react'
import app from "../firebase/firebase.config.js"
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider,signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from "axios";


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role,setRole] = useState('');

  const createUser = async (email, password) => {
    setLoading(true);
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await fetchUserRole(userCredential.user.uid);
    return userCredential;
  }

  const login = async (email, password) => {
    setLoading(true);
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    await fetchUserRole(userCredential.user.uid);
    return userCredential;
  }

  const logout = () => {
    setRole("");
    return signOut(auth)
  }

  const fetchUserRole = async (uid)=>{
    try{
      const response = await axios.get(`http://localhost:7001/apiUser/user/role/${uid}`);
      setRole(response.data.role);
    }catch(error){
      console.error("Error fetching user role:", error);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setUser(currentUser);
      if(currentUser){
        fetchUserRole(currentUser.uid);
      }
      setLoading(false);
    })
    return () => { //cleanup function because we are using onAuthStateChanged its an event listener
      return unsubscribe();
    }
  }, [])

  const authInfo = {
    user,
    role,
    createUser,
    loading,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider