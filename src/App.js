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
  const [currentSection, setCurrentSection] = useState("About");
  useEffect(() => {
    document.title = `Debbie Neflas | ${currentSection}`;
  });

  return (
    <Router>
      <div>
        <Header
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        ></Header>
        <main className="container">
          <Routes>
            <Route path="/">
              <Route path="/about" element={<About />} />
              <Route path="" element={<About />} />
            </Route>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
