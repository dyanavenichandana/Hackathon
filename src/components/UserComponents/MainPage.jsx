/*import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

//import './App.css'; // Import the CSS file for styling (optional)
import { Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import { FaGlobe } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";
import { MdSettings } from "react-icons/md";
import { BiSolidHome } from "react-icons/bi";
import { useMediaQuery } from 'react-responsive';


 
const MainPage = () => {


  const [activePage, setActivePage] = useState(window.location.pathname);

  function handleMenuItemClick(path) {
    setActivePage(path);
  }

  return (
    <>
    
  
   <Sidebar style={{ color:"white",height: "100vh" }}
   backgroundColor="black"
   color= "white">
    <Menu
    menuItemStyles={{
      button: {
        
        [`&[data-path=='${activePage}']`]: {
          backgroundColor: 'red',
          color: 'black',
        },
      },
    }}
  > 
   <MenuItem className='mt-5 ' component={<Link to="/ documentation" />}> 
  <div className="flex gap-5 flex-wrap">
  <BiSolidHome className="mt-1"/>
<div> Home</div></div>
 </MenuItem> 
  <MenuItem className='mt-5 ' 
  onClick={() => {
    handleMenuItemClick('/user/id/profile');
  }} 
   component={<Link to="/user/id/profile" />}
  > 
 
  <div className="flex gap-5 flex-wrap">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
</svg>
<div> Profile</div></div>
 </MenuItem>
     
 <MenuItem className='mt-5 ' component={<Link to="/ documentation" />}> 
  <div className="flex gap-5 flex-wrap">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 0 0-3-3h-3.879a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H6a3 3 0 0 0-3 3v3.162A3.756 3.756 0 0 1 4.094 9h15.812ZM4.094 10.5a2.25 2.25 0 0 0-2.227 2.568l.857 6A2.25 2.25 0 0 0 4.951 21H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-2.227-2.568H4.094Z" />
</svg>

<div>Ideation Respository</div></div>
 </MenuItem>
 <MenuItem className='mt-5 ' component={<Link to="/ documentation" />}> 
  <div className="flex gap-5 flex-wrap">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z" clipRule="evenodd" />
</svg>


<div>Inbox</div></div>
 </MenuItem>
 <MenuItem className='mt-5 ' component={<Link to="/ documentation" />}> 
  <div className="flex gap-5 flex-wrap">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" mt-1 w-6 h-6">
  <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
  <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
             </svg>




<div className="mt-1">Communities</div></div>
 </MenuItem>

 <MenuItem className='mt-5 ' component={<Link to="/ documentation" />}> 
  <div className="flex gap-5 flex-wrap">
 

  <FaGlobe className=' mt-1 ' />


<div>Network</div></div>
 </MenuItem>
 <MenuItem className='mt-5 ' component={<Link to="/ documentation" />}> 
  <div className="flex gap-5 flex-wrap">
  <IoNotificationsSharp  className="mt-1" />
 <div>Notifications</div></div>
 </MenuItem>
 <MenuItem className='mt-5 ' component={<Link to="/ documentation" />}> 
  <div className="flex gap-5 flex-wrap">
  <MdSettings className="mt-1" />
 <div>Settings</div></div>
 </MenuItem>
   
  
    <MenuItem className='mt-5'  component={<Link to="/e-commerce" />}>Logout</MenuItem>
  </Menu>
  <div>
   

  </div>
</Sidebar>
</>
  );
}; 
export default MainPage;

*/
import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineTeam } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";

const Sidebar = ({ activeMenu }) => {
  return (
    <div>
    <div className="bg-white shadow-lg fixed h-full top-0 left-0 bottom-0 z-40 w-64 pt-7">
      <div className="flex items-center flex-shrink-0 px-8 text-secondary-inverse">
        <a href="https://www.loopple.com">
          <img
            alt="Logo"
            src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/logos/loopple.svg"
            className="inline"
          />
        </a>
      </div>
      <div className="mt-5">
        <NavLink
          to="/"
          className="flex items-center text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark py-3 pl-8"
          activeClassName="bg-neutral-100"
          exact={true}
        >
          <AiOutlineHome />
          <span className="mx-4">Sales</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/profile"
          className="flex items-center text-[1.15rem] dark:text-neutral-400/75text-stone-500 hover:text-dark py-3 pl-8"
          activeClassName="bg-neutral-100"
        >
          <AiOutlineTeam />
          <span className="mx-4">Profile</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/settings"
          className="flex items-center text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark py-3 pl-8"
          activeClassName="bg-neutral-100"
        >
          <IoMdSettings />
          <span className="mx-4">Settings</span>
        </NavLink>
      </div>
      <div className="block pt-5 pb-[.15rem]">
        <div className="px-4 py-[.65rem]">
          <span className="font-semibold text-[0.95rem] uppercase dark:text-neutral-500/80 text-secondary-dark">
            Applications
          </span>
        </div>
      </div>
      <div>
        <NavLink
          to="/users"
          className="flex items-center text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark py-3 pl-8"
          activeClassName="bg-neutral-100"
        >
          <FaUsers />
          <span className="mx-4">Users</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/orders"
          className="flex items-center text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark py-3 pl-8"
          activeClassName="bg-neutral-100"
        >
          <GiShoppingCart />
          <span className="mx-4">Orders</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/products"
          className="flex items-center text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark py-3 pl-8"
          activeClassName="bg-neutral-100"
        >
          <MdOutlineLibraryBooks />
          <span className="mx-4">Products</span>
        </NavLink>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
 

 








      
