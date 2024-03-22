import React, { useState } from 'react';

const Register = () => {


  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [domain, setDomain] = useState('');
  const [subdomains, setSubdomains] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState(['']);
  const [rememberMe, setRememberMe] = useState(true);
  

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('name',name);
    console.log('username',userName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Domain:',domain);
    console.log('Experience:',experience)
    console.log('Subdomains:',subdomains)
    console.log('Skills:',skills)
    console.log('Remember Me:', rememberMe);
    
  };
  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };
  const addSkillInput = () => {
    setSkills([...skills, '']); // Add an empty string to skills array when adding a new input box
  };
  return (
    <div className="min-h-screen  bg-slate-900 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md w-full md:w-1/2 mt-5 mb-5">
         <h3 className="mb-4 text-2xl font-semibold text-center">Register</h3>
       
        
        <div className="flex items-center mb-3">
          <hr className="h-0 border-b border-solid border-rose-500 grow" />
         
          <hr className="h-0 border-b border-solid border-rose-500 grow" />
        </div>
        
        {/*Name*/}
        
        <label htmlFor="Name" className= " mx-2 text-sm text-gray-900 ">
        Name
        </label>
        <input
          id="Name"
          type="text"
          placeholder=" Name"
          className="flex items-center w-full px-5 py-4 mb-7 text-sm font-medium outline-none focus:bg-gray-400 placeholder:text-gray-700 bg-gray-200 text-gray-900 rounded-2xl"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
           


        {/*UserName*/}
       <label htmlFor="username" className= " mx-2 text-sm text-gray-900 ">
           Username
        </label>
        <input
          id="Last Name"
          type="text"
          placeholder="userName"
          className="flex items-center w-full px-5 py-4 mb-7 text-sm font-medium outline-none focus:bg-gray-400 placeholder:text-gray-700 bg-gray-200 text-gray-900 rounded-2xl"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

           {/*Email*/}
         <label htmlFor="email" className= " mx-2 text-sm text-gray-900 ">
           email
        </label>
        <input
          id="email"
          type=" email"
          placeholder=" xyz@gmail.com"
          className="flex items-center w-full px-5 py-4 mb-7 text-sm font-medium outline-none focus:bg-gray-400 placeholder:text-gray-700 bg-gray-200 text-gray-900 rounded-2xl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />


 
         {/*Password*/}
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


     
         {/*Domains*/}
<label htmlFor="domain" className="mx-2 text-sm text-gray-900">
        Domains
      </label>
      <select
        id=" select your domain"
        className="flex items-center w-full px-5 py-4 mb-7 text-sm font-medium outline-none focus:bg-gray-400 placeholder:text-gray-700 bg-gray-200 text-gray-900 rounded-2xl"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
      >
        <option value="" disabled selected>
          Select a domain
        </option>
        <option value="Entrepreneurship and Business">Entrepreneurship and Business</option>
        <option value="Art and Design">Art and Design</option>
        <option value="Healthcare and Life Sciences">Healthcare and Life Sciences</option>
        <option value="Technology and Innovation">Technology and Innovation</option>
        <option value="Entertainment and Media">Entertainment and Media</option>
        <option value="Engineering and Construction">Engineering and Construction</option>
        <option value="Education and E-Learning">Education and E-Learning</option>
       
        <option value="Travel and Tourism">Travel and Tourism</option>
        <option value="Fashion and Beauty Industry">Fashion and Beauty Industry</option>
        <option value= "Agriculture and Agrotech">Agriculture and Agrotech</option>
        <option value= "Digital Marketing and Social Media">Digital Marketing and Social Media</option>
        <option value="Fashion Design Collaboration">Fashion Design Collaboration</option>
        
      
</select>

       
      
         {/*subdomains*/}
      <label htmlFor="Subdomains" className="mx-2 text-sm text-gray-900">
      Subdomains
       </label>
      <input

        id="Subdomains" // Updated the id to "Subdomains" for consistency
       type="text"
        placeholder="Subdomains"
         className="flex items-center w-full px-5 py-4 mb-7 text-sm font-medium outline-none focus:bg-gray-400 placeholder:text-gray-700 bg-gray-200 text-gray-900 rounded-2xl"
         value={subdomains} // Updated value to use the "subdomains" state variable
        onChange={(e) => setSubdomains(e.target.value)} // Changed to setSubdomains to update the subdomains state
    />

      



         {/*Experience*/}
      <label htmlFor="experience" className="mx-2 text-sm text-gray-900">
        Experience
      </label>
      <select
        id="experience"
        className="flex items-center w-full px-5 py-4 mb-7 text-sm font-medium outline-none focus:bg-gray- placeholder:text-gray- bg-gray-200 text-gray-900 rounded-2xl"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      >
        <option value="" disabled selected>
          Select an experience
        </option>
        <option value="1">Beginner</option>
        <option value="2">Intermediate</option>
        <option value="3">Advanced</option>
      </select>
        
      
       {/*Experience*/}
      <label htmlFor="Skills" className="mx-2 text-sm text-gray-900">
  Skills
   </label>
   
   {skills.map((skill, index) => (
          <div key={index} className="mb-3">
            <input
              type="text"
              placeholder={`Skill ${index + 1}`}
              className="flex items-center w-full px-5 py-4 text-sm font-medium outline-none focus:bg-gray-400 placeholder:text-gray-700 bg-gray-200 text-gray-900 rounded-2xl"
              value={skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
            />
          </div>
        ))}
        {/* Button to add another input box for skills */}
        <button
          type="button"
          onClick={addSkillInput}
          className="mb-5 w-full px-6 py-2 text-sm font-bold leading-none transition duration-300 rounded-2xl hover:bg-rose-600 focus:ring-4 focus:ring-purple-100 bg-rose-200"
        >
          Add Skill
        </button>







        
         
       
       
        <button
          type="submit"
          className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none  transition duration-300 md:w-45 rounded-2xl hover:bg-rose-600 focus:ring-4 focus:ring-purple-100 bg-rose-200"
        >
          Register
        </button>
       
       



       
       
      </form>
      
      
      
    </div>
  )
  
};
export default Register;