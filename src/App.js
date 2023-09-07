import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <ScrollUp />
      </div>
    </div>
  );
}

export default App;
