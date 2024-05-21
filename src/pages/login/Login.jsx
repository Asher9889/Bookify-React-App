import React, { useEffect, useState } from "react";
import { useFirebase } from "../../firebase/FirebaseContext";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { loginInWithEmailAndPassword, googleSignIn, isLoggedIn } = useFirebase();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const result = await loginInWithEmailAndPassword(email, password)
    console.log(result)
  }

  const loginGoogleHandle = () =>{
    googleSignIn();
  }

  const loginCheckHandle = () =>{
    if(isLoggedIn) navigate("/")
    else navigate("/login")    
  }
  
  useEffect(()=>{
    loginCheckHandle()
  }, [isLoggedIn , navigate])


  return (
    <div className=" w-full h-[80vh] flex flex-row">
      <div className="left flex-1 bg-red-200 flex items-center justify-center">
        <div className="text-start text-4xl font-black font-radio leading-[40px]">
          <p>
            Login In to <br /> Manage Awesome <br />
            Books
          </p>
        </div>
      </div>
      <div className="right w-full h-full flex-1   bg-red-800 ">
        <div className="w-full h-full flex flex-col gap-5 justify-center items-center ">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-[60%]">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className=" rounded-md p-2 outline-none"
              type="text"
              placeholder="Enter email"
              />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className=" rounded-md p-2 outline-none"
              type="password text-xl"
              placeholder="Enter password"
            />
            <button 
            type="submit" 
            className="bg-blue-500 py-2 rounded-md text-white">
              Log in
            </button>
          </form>

           <div onClick={loginGoogleHandle} className="bg-white px-2 cursor-pointer">Login with Google</div>          
        </div>
       
      </div>
      
      
    </div>
  );
};

export default Register;
