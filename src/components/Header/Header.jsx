import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Header = () => {
 
  return (
    <header className="shadow sticky z-50 top-0">
    <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 bg-slate-900 text-white">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
         <div className="flex flex-wrap gap-2">  
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" mt-1 w-6 h-6">
  <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
  <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
             </svg>
             <div  className="text-2xl font-bold">FusionIdeas<span className="text-rose-600">Hub</span></div>
             </div> 
            <div className="flex items-center lg:order-2  gap-2  text-lg">
                <Link
                    to="user/login"
                    className="text-white bg-rose-600 hover:bg-rose-400 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                    Log in
                </Link>
                <Link
                    to="#"
                    className="text-white bg-rose-600 hover:bg-rose-400 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                    Get started
                </Link>
            </div>
            <div
                className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1  "
                id="mobile-menu-2"
            >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <NavLink
                        to={'/'}
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                ${isActive ?
                                "text-rose-600":" text-white" } 
                                lg:hover:bg-transparent lg:border-0 hover:text-rose-700 lg:p-0`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to={'/about'}
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                ${isActive ?
                                "text-rose-600":" text-white" } 
                                lg:hover:bg-transparent lg:border-0 hover:text-rose-700  lg:p-0`
                            }
                        >
                            about
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to={'/contact'}
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                ${isActive ?
                                "text-rose-600":" text-white" } 
                                lg:hover:bg-transparent lg:border-0 hover:text-rose-700  lg:p-0`
                            }
                        >
                            contact
                        </NavLink>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
   </header>
  )
}

export default Header