import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="w-full h-20 bg-lightcream">
      <nav className="relative flex justify-between items-center  px-16">
        <div className="relative w-20 h-20 ">
          <img src={Logo} alt="stay fit logo" className="w-full h-full" />
        </div>
        <div className="flex gap-12 font-[500] text-[1.09rem] text-grayishBlack-200 ">
          <Link className="hover:text-redPrimary" to="/">
            Home
          </Link>
          <Link className="hover:text-redPrimary" to="/exercises">
            Exercises
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
