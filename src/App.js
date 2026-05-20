import { Analytics } from '@vercel/analytics/react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
       <Navbar />
       <Home />
       <About />
       <TechStack /> 
       <Projects />
       <Contact />
       <Analytics />
    </div>
  );
}

export default App;
