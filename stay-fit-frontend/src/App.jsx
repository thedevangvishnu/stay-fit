import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<h2>Exercises</h2>} />
      </Routes>
      <h2>Footer</h2>
    </>
  );
};

export default App;
