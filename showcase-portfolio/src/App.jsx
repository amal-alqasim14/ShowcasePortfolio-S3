import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Admin from "./pages/Admin";
import ProjectDetail from "./pages/ProjectDetail";

function PortfolioPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/project/:slug" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;