import { useRef, useEffect, useState } from "react";

// components
import Header from "../components/Header";
import SiteLoader from "../components/loaders/SiteLoader";

// home-components
import Intro from "../components/home/Intro";
import Tools from "../components/home/Tools";
import Software from "../components/home/Software";
import Shows from "../components/home/Shows";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";

export default function Home() {
  const [siteLoading, setSiteLoading] = useState(true);

  // refs
  const projectsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSiteLoading(false);
    }, 4000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  // scroll handler
  const scrollHandler = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  if (siteLoading) {
    return <SiteLoader />;
  } else {
    return (
      <div>
        <Header />
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
}
