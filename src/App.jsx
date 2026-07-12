import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Achievements from "./components/Achievements";
import Activities from "./components/Activities";
import Contact from "./components/Contact";
import "./App.css";

const ScrollHandler = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/" && !hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [pathname, hash]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
};

const App = () => (
  <Router>
    <ScrollHandler />
    <Navbar />
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Achievements />
            <Activities />
            <Contact />
          </>
        }
      />
      <Route path="/projects/:id" element={<ProjectDetail />} />
    </Routes>
  </Router>
);

export default App;
