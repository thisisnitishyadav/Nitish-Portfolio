import "../App.css";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Display() {
  return (
    <div className="pl-[25%] max-md:pl-0 max-md:w-full w-full back text-white relative min-h-screen">
      <div className="relative z-10">
        <Home />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
