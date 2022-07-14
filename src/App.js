import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";

function App() {
  const [currentSection, setCurrentSection] = useState("About");

  return (
    <div>
      <Header
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      ></Header>
      <PortfolioContainer currentSection={currentSection}></PortfolioContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
