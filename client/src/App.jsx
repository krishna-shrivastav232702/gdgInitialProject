import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "./components/Navbar"
import MyFooter from "./components/MyFooter"

import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <div className='min-h-screen'><Outlet /></div>
      <MyFooter />
    </>
  )
}

export default App
