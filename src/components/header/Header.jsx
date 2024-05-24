import React, { useEffect } from "react";
import { ContentWrapper } from "../index";
import { useFirebase } from "../../firebase/FirebaseContext";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { isLoggedIn, userSignOut, name, setName } = useFirebase();
  const {pathname} = useLocation()
 
  
  const navigate = useNavigate();
  console.log(isLoggedIn);

  const logoutHandle = async (e) => {
    console.log(e);
    if (isLoggedIn) {
      await userSignOut();
      setName(null)
      navigate("/login");
    } if (pathname === "/register") navigate("/login")
    else {
      console.log("register") 
      navigate("/register");
    }
  };


   


  return (
    <header className="w-full h-[10vh] bg-[var(--background-color)] ">
      <ContentWrapper>
        <div className="w-full h-[10vh] flex justify-between items-center">
          <p onClick={()=> navigate(`/home`)} className="font-extrabold tracking-[1px] text-xl">BOOKSHOP</p>
          <ul className="flex gap-10">
            {isLoggedIn && ["Home", "Categories", "Listing", "Contact"].map((e) => (
              <li key={e} onClick={()=> navigate(`/${e.toLowerCase()}`)} className="font-semibold cursor-pointer">{e}</li>
            ))}
          </ul>
          {name  && <p className="font-semibold">Welcome: {name} </p>}
          <p
            onClick={logoutHandle}
            className="font-bold  px-4 py-1 border-2 border-zinc-900 bg-zinc-300 cursor-pointer hover:bg-zinc-400 hover:scale-100"
          >
            {isLoggedIn ? "Logout" : pathname === "/login" ? "Create Account" : "Login"}
          </p>
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Header;
