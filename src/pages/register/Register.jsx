import React, { useState, useEffect } from "react";
import { useFirebase } from "../../firebase/FirebaseContext";
import { useNavigate } from "react-router-dom";
import google from "../../assets/google.png"

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const { signUpUserWithEmailAndPassword, isLoggedIn } = useFirebase();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const result = await signUpUserWithEmailAndPassword(email, password)
    console.log(result)
  }
  const loginCheckHandle = () =>{
    if(isLoggedIn) navigate("/")
    // else navigate("/login")    
  }
  
  useEffect(()=>{
    loginCheckHandle()
  }, [isLoggedIn , navigate])

  return (
    <div className=" w-full h-[80vh] flex flex-row">
      <div className="left flex-1 flex items-center justify-center">
        <div className="text-start text-4xl font-black font-radio leading-[40px]">
          <p>
            Create a Account <br /> to Manage Awesome <br />
            Books
          </p>
        </div>
      </div>
      <div className="right w-full h-full flex-1 ">
        <div className="w-full h-full flex flex-col justify-center items-center ">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-[60%]">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className=" rounded-md p-2 outline-none bg-zinc-200"
              type="text"
              placeholder="Enter email"
              />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className=" rounded-md p-2 outline-none bg-zinc-200"
              type="password text-xl"
              placeholder="Enter password"
            />
            <button 
            type="submit" 
            className="bg-blue-500 py-2 rounded-md text-white">
              Create Account
            </button>
            
          </form>
          <div className="flex items-center gap-2 mt-4 w-fit border-[1px] border-zinc-500 px-7 py-1 rounded-full bg-zinc-200">
            <img className="w-5  " src={google} alt="" />
            <p className="text-base font-base text-zinc-800 ">Signup with Google</p>
          </div>
          
        </div>
       
      </div>
      
    </div>
  );
};

export default Register;
