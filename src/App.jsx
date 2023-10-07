import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Materials from "./Pages/Materials/Materials";
import About from "./Pages/About/About";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </React.Fragment>
  );
}

export default App;
