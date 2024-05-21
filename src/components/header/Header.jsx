import React from "react";
import { ContentWrapper } from "../index";
import { useFirebase } from "../../firebase/FirebaseContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { isLoggedIn, userSignOut } = useFirebase();
  const navigate = useNavigate();
  console.log(isLoggedIn);

  const logoutHandle = async (e) => {
    console.log(e);
    if (isLoggedIn) {
      await userSignOut();
      navigate("/login");
    } else {
      console.log("register") 
      navigate("/register");
    }
  };

  return (
    <header className="w-full h-[10vh] ">
      <ContentWrapper>
        <div className="w-full h-[10vh] flex justify-between items-center">
          <p className="font-extrabold tracking-[1px] text-xl">BOOKSHOP</p>
          <ul className="flex gap-10">
            {["Home", "Categories", "About us", "Contact", "FAQ"].map((e) => (
              <li className="font-semibold">{e}</li>
            ))}
          </ul>
          <p
            onClick={logoutHandle}
            className="font-bold  px-4 py-1 border-2 border-zinc-900 bg-zinc-300 cursor-pointer hover:bg-zinc-400 hover:scale-100"
          >
            {isLoggedIn ? "Logout" : "Create Account"}
          </p>
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Header;
