import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AboutMe from "./pages/AboutMe.jsx";
import Contact from "./pages/Contact.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Resume from "./pages/Resume.jsx";



const router = createBrowserRouter([{
  path:"/",
  element: <App/>, 
  children :[
  {
    path: "/aboutme",
    element: <AboutMe></AboutMe>,
  },

  {
    path: "/contact",
    element: <Contact></Contact>,
  },

  {
    path: "/portfolio",
    element: <Portfolio></Portfolio>,
  },

  {
    path: "/resume",
    element: <Resume></Resume>,
  },
]}]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  
  </StrictMode>,

);
