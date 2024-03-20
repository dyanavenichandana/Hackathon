import React, { useState } from 'react';

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
    <div className="min-h-screen  bg-slate-900 flex items-center justify-center">
      <form onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full sm:w-96"
      >
        <h3 className="mb-4 text-2xl font-semibold text-center">Sign In</h3>
       
        <button
          type="button"
          className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl  bg-rose-200 hover:bg-rose-400 focus:ring-4 focus:ring-rose-300"
        >
          <img className="h-5 mr-2" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png" alt="Google" />
          Sign in with Google
        </button>
        <div className="flex items-center mb-3">
          <hr className="h-0 border-b border-solid border-rose-500 grow" />
          <p className="mx-4 text-rose-600">or</p>
          <hr className="h-0 border-b border-solid border-rose-500 grow" />
        </div>
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
          Sign In
        </button>
        <p className="text-sm leading-relaxed text-gray-900">
          Not registered yet?{' '}
          <a href="javascript:void(0)" className="font-bold text-gray-700">
            Create an Account
          </a>
        </p>
 
      </form>
    </div>
  )
  
};

export default Login;