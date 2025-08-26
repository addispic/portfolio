import { useRef } from "react";
// home-components
import Intro from "../components/home/Intro";
import Tools from "../components/home/Tools";
import Software from "../components/home/Software";
import Shows from "../components/home/Shows";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";
export default function Home() {
  // refs
  const projectsRef = useRef<HTMLDivElement | null>(null);

  // scroll handler
  const scrollHandler = () => {
    console.log("Hello WOrld");
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <Intro />
      <Tools />
      <Software scrollHandler={scrollHandler} />
      <Shows />
      <Projects />
      <div ref={projectsRef} />
      <Contact />
    </div>
  );
}
