import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  const initialSection = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const [currentSection, setCurrentSection] = useState(initialSection);
  useEffect(() => {
    document.title = `Debbie Neflas | ${currentSection}`;
  });

  return (
    <Router>
      <div className="bg-primary">
        <Header
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        ></Header>
        <main className="container">
          <Routes>
            <Route path="/react-portfolio">
              <Route path="/react-portfolio/about" element={<About />} />
              <Route path="" element={<About />} />
            </Route>
            <Route path="/react-portfolio/portfolio" element={<Portfolio />} />
            <Route path="/react-portfolio/contact" element={<ContactForm />} />
            <Route path="/react-portfolio/resume" element={<Resume />} />
          </Routes>
        </main>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
