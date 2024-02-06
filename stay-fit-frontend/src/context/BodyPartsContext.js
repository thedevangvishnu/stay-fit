import { createContext, useState, useEffect } from "react";

export const BodyPartsContext = createContext();

export const BodyPartsProvider = ({ children }) => {
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchBodyParts = async () => {
      const response = await fetch("http://localhost:8000/exercises/bodyParts");
      const result = await response.json();
      setBodyParts(result);
    };

    fetchBodyParts();
  }, []);

  const value = { bodyParts };

  return (
    <BodyPartsContext.Provider value={value}>
      {children}
    </BodyPartsContext.Provider>
  );
};
