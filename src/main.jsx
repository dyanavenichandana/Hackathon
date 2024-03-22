import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'

import Login from './components/Login.jsx'

import Profile from './components/UserComponents/Profile.jsx'
import UserLayout from './components/UserComponents/UserLayout.jsx'
import Register from './components/Register.jsx'
const router =createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Layout/>}>
       <Route path='' element={<Home />}/>
       <Route path='about' element={<About/>}/>
       <Route path='contact' element={<Contact/>}/>
       
    </Route>
    <Route path='/user' >
     <Route path='login' element={<Login/>}/>
     <Route path='register' element={<Register/>}/>
    </Route>
    <Route path='/user/id' element={<UserLayout/>} >
    <Route path='profile' element={<Profile/>}/>
    </Route>
  
  </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
