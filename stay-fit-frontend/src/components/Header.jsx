import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="w-full xs:h-16 h-20 bg-lightcream">
      <nav className="relative flex justify-between items-center xs:px-8 px-16">
        <div className="relative xs:w-16 xs:h-16 w-20 h-20 ">
          <img src={Logo} alt="stayfit logo" className="w-full h-full" />
        </div>
        <div className="flex xs:gap-8 gap-12 font-[500] xs:text-[0.9rem] text-[1.09rem] text-grayishBlack-200 ">
          <Link
            className="transition ease-in-out duration-300 hover:text-redPrimary-100 "
            to="/"
          >
            Home
          </Link>
          <Link
            className="transition ease-in-out duration-300 hover:text-redPrimary-100"
            to="/exercises"
          >
            Exercises
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
