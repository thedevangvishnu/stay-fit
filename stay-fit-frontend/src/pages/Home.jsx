import React from "react";
import HeroSection from "../components/HeroSection";
import Search from "../components/Search";

const Home = () => {
  return (
    <main>
      {/* hero section */}
      <section>
        <HeroSection />
      </section>

      {/* exercises section */}
      <section>
        <div className="xs:px-12 px-16 pt-10 bg-grayishBlack-300 flex flex-col items-center gap-8">
          {/* heading */}
          <div>
            <h2 className="text-white font-semibold text-5xl">
              Explore our exercises
            </h2>
          </div>

          {/* searchbar */}
          <Search />

          {/* body parts components */}
          <div></div>

          {/* exercises components */}
        </div>
      </section>
    </main>
  );
};

export default Home;
