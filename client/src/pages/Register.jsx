import React from 'react'
import { NavLink } from 'react-router-dom';
const Register = () => {
  return (
   <>
    <div className="register_page_background w-[100vw] h-[100vh] flex justify-center items-center"  style={{ backgroundImage: `url('/images/orange-bg.avif')`}}>      
        <div className="registerPage w-[75vw] bg-white rounded-2xl shadow-[0px_0px_9px_6px_#C55219]">
            <div className="twoParts flex">
                <div className="firstPart w-[50%] bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url('/images/raffle-tickets.jpg')`}}>

                </div>
                <div className="secondPart">
                     <div className="backArrow w-8 h-6 mt-8 ml-5">
                             <NavLink to="/" className="linkBttn">
                              <img src="   https://cdn-icons-png.flaticon.com/512/2099/2099190.png " alt="" />
                             </NavLink>
                        </div>
                    <div className="LoginFormContainer mt-[15vh] mb-[15vh] ml-[0.5vw]">                      
                        <div className="containerLabel  font-semibold text-4xl font-sans text-[1.75rem] text-[#413c3c] ml-[1rem]">
                            Register
                        </div>
                       <div className="loginForm w-[30vw] m-[1.5vw]">
                             <div className="mb-3 ">
                                <label htmlFor="" className=' text-[13px]'>Name <span class="required text-red-700">*</span></label>
                                 <input
                                      type="Name"                
                                      className="w-[30vw] p-2 rounded-[2.5rem] border-none focus:outline-none placeholder-[#6f757c] shadow-[inset_0_-0.5px_0_0_#6f757c]"
                                      id="name"
                                     
                                       required
                                      />
                             </div>
                             <div className="mb-3 inputBox">
                               <label htmlFor="" className=' text-[13px]'>Email <span class="required text-red-700">*</span></label>
                                <input
                                      type="email"                
                                      className=" w-[30vw] p-2 rounded-[2.5rem] border-none focus:outline-none placeholder-[#6f757c] shadow-[inset_0_-0.5px_0_0_#6f757c]"
                                      id="email"
                                     
                                      required
                                      />
                              </div>
                               <div className="mb-3 inputBox">
                               <label htmlFor="" className=' text-[13px]'>Phone <span class="required text-red-700">*</span></label>
                                <input
                                      type="phone"                
                                      className="w-[30vw] p-2 rounded-[2.5rem] border-none focus:outline-none placeholder-[#6f757c] shadow-[inset_0_-0.5px_0_0_#6f757c]"
                                      id="phone"
                                    
                                      required
                                      />
                              </div>
                               <div className="mb-3 inputBox">
                               <label htmlFor="" className=' text-[13px]'>Password <span class="required text-red-700">*</span></label>
                                <input
                                      type="password"                
                                      className="w-[30vw] p-2 rounded-[2.5rem] border-none focus:outline-none placeholder-[#6f757c] shadow-[inset_0_-0.5px_0_0_#6f757c]"
                                      id="password"
                                      
                                      required
                                      />
                              </div>
                             <div>
                                  <button type="submit" className="login-button bg-[#ec520b] w-[13vw] p-2 rounded-[1rem] text-white">
                                    Submit
                                  </button>
                             </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
   </>
  )
}

export default Register