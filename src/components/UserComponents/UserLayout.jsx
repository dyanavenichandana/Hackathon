import React from 'react'
import MainPage from './Sidebar'
import {Outlet} from 'react-router-dom'
import Sidebar from './Sidebar'
const UserLayout = () => {
  return (
    <div className="flex flex-wrap">
  <Sidebar />
  <div className="flex-grow ml-64"> {/* Use flex-grow to allow the content to occupy remaining space */}
    <Outlet />
  </div>
</div>
  )
}

export default UserLayout