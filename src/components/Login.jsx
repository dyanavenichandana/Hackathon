import React, { useState } from 'react';
import { Link} from 'react-router-dom'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <div className="min-h-screen  bg-slate-900 flex items-center justify-center ">
      <form onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full sm:w-96 mt-5"
      >
        <h3 className="mb-4 text-2xl font-semibold text-center">Login</h3>
        <label htmlFor="email" className= " mx-2 text-sm text-gray-900 ">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="mail@loopple.com"
          className="flex items-center w-full px-5 py-4 mb-7 text-sm font-medium outline-none focus:bg-gray-400 placeholder:text-gray-700 bg-gray-200 text-gray-900 rounded-2xl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="mb-2 text-sm text-gray-900">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter a password"
          className="flex items-center w-full px-5 py-4 mb-5 text-sm font-medium outline-none focus:bg-gray-400 placeholder:text-gray-700 bg-gray-200 text-gray-900 rounded-2xl"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex flex-row justify-between mb-8">
          <div className="relative inline-flex items-center mr-3 cursor-pointer select-none">
          
           <input type="checkbox" 
            checked={rememberMe}
            onChange={()=>{setRememberMe(!rememberMe)}}
           />
       
          

            <span className="ml-3 text-sm font-normal text-gray-900">
              Keep me logged in
            </span>
            </div>
             </div>
         
          <a href="javascript:void(0)" className="mr-4 text-sm font-medium ">
            Forget password?
          </a>
       
        <button
          type="submit"
          className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none  transition duration-300 md:w-45 rounded-2xl hover:bg-rose-600 focus:ring-4 focus:ring-purple-100 bg-rose-200"
        >
          Log In
        </button>
        <p className="text-sm leading-relaxed text-gray-900">
          Not registered yet?{' '}
          <Link to="/user/register" className="font-bold text-gray-700">
            Create an Account
          </Link>
          
        </p>
 
      </form>
    </div>
  )
  
};

export default Login;