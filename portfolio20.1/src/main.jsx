import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AboutMe from "./pages/aboutme.jsx";
import Contact from "./pages/contact.jsx";
import Portfolio from "./pages/portfolio.jsx";
import Resume from "./pages/resume.jsx";



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
