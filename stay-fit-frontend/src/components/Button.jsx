import React from "react";

const Button = ({ children }) => {
  return (
    <button className="transition ease-in-out px-6 py-3 bg-redPrimary-100 hover:bg-redPrimary-200 tracking-[0.2rem] text-white fsdafdsaf shadow-xl shadow-shadowBlack-100 hover:shadow-shadowBlack-200 duration-[0.4s] ">
      {children}
    </button>
  );
};

export default Button;
