import React from "react";

// components
// home components
// home first order component
import HomeFirstOrderComponent from "../components/home-components/HomeFirstOrderComponent";
// service component
import ServicesComponent from "../components/home-components/ServicesComponent";
// about me
import AboutMe from "../components/home-components/AboutMe";

const Home = () => {
  return (
    <div>

      {/* first order container */}
      <HomeFirstOrderComponent />
      {/* services */}
      <ServicesComponent />
      {/* about me */}
      <AboutMe />
    </div>
  );
};

export default Home;
