import { useEffect, useState } from "react";

import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  const [bodyParts, setBodyParts] = useState([]);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchBodyParts = async () => {};

    const fetchExercises = async () => {};
  });

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home bodyParts={bodyParts} exercises={exercises} />}
        />
        <Route path="/exercises" element={<h2>Exercises</h2>} />
      </Routes>
      <h2>Footer</h2>
    </>
  );
};

export default App;
