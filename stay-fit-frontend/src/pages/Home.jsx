import { useContext } from "react";

import HeroSection from "../components/HeroSection";
import Search from "../components/Search";
import BodyPartsCard from "../components/BodyPartsCard";

import { BodyPartsContext } from "../context/BodyPartsContext";
import ExerciseCard from "../components/ExerciseCard";

const Home = () => {
  const { bodyParts } = useContext(BodyPartsContext);

  return (
    <main>
      {/* hero section */}
      <section>
        <HeroSection />
      </section>

      {/* exercises section */}
      <section>
        <div className="w-full xs:px-12 px-16 py-10 bg-grayishBlack-300 flex flex-col items-center gap-8">
          {/* heading */}
          <div>
            <h2 className="text-white font-semibold text-5xl">
              Explore our exercises
            </h2>
          </div>

          {/* searchbar */}
          <Search />

          {/* body parts components */}
          <div className="w-full text-white flex overflow-hidden gap-8 pt-6">
            {bodyParts.map((bodyPart) => (
              <BodyPartsCard key={bodyPart} name={bodyPart} />
            ))}
          </div>

          {/* exercises components */}
          <ExerciseCard />
        </div>
      </section>
    </main>
  );
};

export default Home;
