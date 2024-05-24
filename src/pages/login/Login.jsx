import React, { useEffect, useState } from "react";
import { useFirebase } from "../../firebase/FirebaseContext";
import { useNavigate } from "react-router-dom";
import { ContentWrapper } from "../../components";
import google from "../../assets/google.png"

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { loginInWithEmailAndPassword, googleSignIn, isLoggedIn, setName } = useFirebase();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const result = await loginInWithEmailAndPassword(email, password)
    console.log(result)
  }

  const loginGoogleHandle = () =>{
    googleSignIn();
  }

  const loginCheckHandle = () =>{
    if(isLoggedIn) navigate("/home")
    else navigate("/login")    
  }
  
  useEffect(()=>{
    loginCheckHandle()
  }, [isLoggedIn , navigate])


  return (
    <div className=" w-full h-[90vh]  ">
      <ContentWrapper>
        <div className="w-full h-[90vh] flex flex-col sm:flex-row  gap-5 items-center justify-center">
          <div className="w-full flex-1 flex justify-center items-center  text-start text-4xl font-black font-radio leading-[40px] ">
            <p>
              Log In to <br /> Manage Awesome <br />
              Books
            </p>
          </div>
          <div className=" w-full h-full flex-1 ">
            <div className="h-full flex flex-col gap-5 justify-center items-center ">
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 w-[60%]  sm:px-10 lg:px-20">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className=" w-full rounded-md p-2 outline-none bg-zinc-200"
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
                className="bg-blue-500 py-2 mt-4 rounded-md text-white cursor-pointer">
                  Log in
                </button>
              </form>

              <div className="flex items-center  gap-2 mt-4 w-fit border-[1px] border-zinc-500 px-7 py-1 rounded-full bg-zinc-200">
            <img className="w-4  " src={google} alt="" />
            <p onClick={()=> googleSignIn()} className="text-sm font-base text-zinc-800 ">Signup with Google</p>
          </div>            </div>
          
          </div>
        </div>
      
      </ContentWrapper>
    </div>
  );
};

export default Register;
