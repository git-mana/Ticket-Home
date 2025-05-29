import React from 'react'
import '../scss/styles.scss'
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
 <>
     <div className="twoparts flex gap-[10vw]">
        <div className="LoginFormContainer mt-[23vh] ml-[0.5vw]">
         <div className="containerLabel  font-semibold text-4xl font-sans text-[1.75rem] text-[#413c3c] ml-[1rem]">
         Sign in to Ticket Home
        </div>
        <div className="loginForm w-[30vw] m-[1.5vw]">
          <div className="mb-3 ">
                <input
                 type="email"                
                 className="border border-gray-300  bg-[#f3f3f3] w-[30vw] p-2 rounded-[2.5rem] border-none focus:outline-none placeholder-[#6f757c]"
                 id="email"
                 placeholder="Email"
                 required
                 />
          </div>
          <div className="mb-3 inputBox">
                <input
                 type="password"                
                 className="border border-gray-300 bg-[#f3f3f3] w-[30vw] p-2 rounded-[2.5rem] border-none focus:outline-none placeholder-[#6f757c]"
                 id="password"
                 placeholder="Password"
                 required
                 />
          </div>
          <div>
            <button type="submit" className="login-button bg-[#ec520b] w-[13vw] p-2 rounded-[1rem] text-white">
              Login
            </button>
           </div>
      </div>
   </div>
   <div className="form-container-new-account mt-[23vh] ml-[0.5vw] flex flex-col gap-4 w-[50vw]">
        <div className="title font-semibold text-4xl font-sans text-[1.75rem] text-[#413c3c]">New Customer</div>                
          <div className="mb-3 inputboxCreateAccount flex flex-col gap-4">
            <label htmlFor="">Create an account</label>   
            <span className='font-sans'>Sign up for a free account at Ticket home. Registration is quick and easy. It allows you to be able to order from our Ticket home. To start ordering click 'Create an account'.</span>  
             <div>
              <NavLink to="/register" className="linkBttn">
                <button type="submit" className="register-nav-button bg-[#ec520b] w-[13vw] p-2 rounded-[1rem] text-white">
                  Create an account
                </button>
                </NavLink>
             </div>       
          </div>                    
      </div>
  </div>
</>
  )
}

export default Login