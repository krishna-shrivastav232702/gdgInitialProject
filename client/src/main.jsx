import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import Router from "./Routers/Router"
import AuthProvider from "./context/AuthProvider"


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
      <AuthProvider>
        <RouterProvider router={Router}/>
      </AuthProvider>
  </StrictMode>
)


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )