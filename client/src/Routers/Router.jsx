import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import React from 'react'
import Home from "../scenes/Home/Home"
import Events from "../scenes/Events/Events"
import Manage from "../scenes/admin/Manage"
import About from "../scenes/about/About"
import Signup from "../scenes/authentication/Signup"
import Login from "../scenes/authentication/Login"
import Upload from "../components/Form/Upload"
import Edit from "../components/Form/Edit"
import Delete from "../components/Form/Delete"
import Logout from "../scenes/authentication/Logout"
import RegistrationForm from "../components/Form/RegistrationForm"
import Dashboard from "../scenes/admin/Dashboard"
import SingleEvent from "../components/SingleEvent"


const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/events",
                element: <Events />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/registration/:id", //id required 
                element: <RegistrationForm />
            },
            {
                path: "/logout",
                element: <Logout />
            },
            {
                path:"/events/:id",
                element:<SingleEvent/>,
                loader: ({ params }) => fetch(`http://localhost:7001/api/events/${params._id}`)
            }
        ]
    },
    {

        path: "/admin",
        element: <Manage />,
        children: [
            {
                path:"/admin/dashboard",
                element:<Dashboard/>
            },

            {
                path: "/admin/event/upload",
                element: <Upload />
            },
            {
                path: "/admin/event/edit/:id",
                element: <Edit />,
                loader: ({ params }) => fetch(`http://localhost:7001/api/events/${params._id}`)
            },
            {
                path: "/admin/event/delete/:id",
                element: <Delete />,
                loader:({params})=>fetch(`http://localhost:7001/api/events/${params._id}`)
            },
        ]
    }
])

export default Router