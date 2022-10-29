import "./App.css";

import Portfolio from "./components/page/Portfolio";
import Contact from "./components/page/Contact";
import About from "./components/page/About";
import Skill from "./components/page/Skill";
import Footer from "./components/UI/Footer";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
