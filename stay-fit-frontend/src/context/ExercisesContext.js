import { createContext, useState, useEffect } from "react";

export const ExercisesContext = createContext();

export const ExercisesProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const response = await fetch("http://localhost:8000/exercises");
      const exercises = response.json();
      setExercises(exercises);
    };

    fetchExercises();
  }, []);

  const value = { exercises };

  return (
    <ExercisesContext.Provider value={value}>
      {children}
    </ExercisesContext.Provider>
  );
};
