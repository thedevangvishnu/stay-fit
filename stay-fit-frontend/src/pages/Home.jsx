import React from "react";
import HeroImage from "../assets/images/trainer-image-2.png";
import Button from "../components/Button";

const Home = () => {
  return (
    <main>
      {/* hero section */}
      <section className="w-full h-[90vh] xs:px-12 px-16 pt-4 flex justify-between bg-lightcream">
        <div className="flex flex-col xs:w-full md:w-3/5  justify-center">
          <h1 className="text-[2.5rem] sm:text-[4rem] lg:text-[6rem] xl:text-[7rem] font-[1000] text-grayishBlack-200">
            500+
          </h1>
          <h1 className="text-[2.5rem] sm:text-[4rem] lg:text-[6rem] xl:text-[7rem] font-[1000] mt-[-1.5rem] sm:mt-[-2rem] lg:mt-[-3rem] xl:mt-[-5rem] text-grayishBlack-200">
            EXERCISES
          </h1>
          <h1 className="text-[2.5rem] sm:text-[4rem] lg:text-[6rem] xl:text-[7rem] font-[1000] mt-[-1.5rem] sm:mt-[-2rem] lg:mt-[-3rem] xl:mt-[-5rem] text-grayishBlack-200">
            TO <span className="text-redPrimary-100">STAY FIT</span>
          </h1>
          <p className="w-2/3 mt-[-1rem] mb-4 text-grayishBlack-100 font-semibold">
            500+ exercises that you can choose from and start doing to become
            healtier, fitter and stronger. Explore now
          </p>
          <div className="self-start">
            <Button>EXPLORE</Button>
          </div>
        </div>

        <div className="xs:hidden sm:hidden md:flex md:w-2/5 h-full  flex">
          <div className="w-full h-full flex self-end ">
            <img
              src={HeroImage}
              alt="banner of a trainer"
              className="w-full h-full object-contain "
            />
          </div>
        </div>
      </section>

      <section>
        {/* heading */}

        {/* searchbar */}

        {/* body parts components */}

        {/* exercises components */}
      </section>
    </main>
  );
};

export default Home;
