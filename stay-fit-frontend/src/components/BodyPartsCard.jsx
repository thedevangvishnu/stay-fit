import React from "react";
import GymIcon from "../assets/icons/gym.png";

const BodyPartsCard = ({ name }) => {
  return (
    <div className="min-w-44 min-h-32 bg-grayishBlack-400 shadow-xl shadow-shadowBlack-200 cursor-pointer flex flex-col justify-center items-center gap-3">
      <div className="w-12 h-12">
        <img src={GymIcon} alt="gym icon" className="w-full h-full" />
      </div>
      <h3>{name.toUpperCase()}</h3>
    </div>
  );
};

export default BodyPartsCard;
