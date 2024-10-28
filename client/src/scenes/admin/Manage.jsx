import React from 'react'
import {Outlet} from "react-router-dom"
import SideBar from './Sidebar'

const Manage = () => {
  return (
    <div className='h-screen bg-darkBlue flex gap-4 '>
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default Manage