import React from "react";

// components
// home components
// home first order component
import HomeFirstOrderComponent from "../components/home-components/HomeFirstOrderComponent";
// service component
import ServicesComponent from "../components/home-components/ServicesComponent";
// about me
import AboutMe from "../components/home-components/AboutMe";
// message me
import MessageMe from "../components/home-components/MessageMe";

const Home = () => {
  return (
    <div>

      {/* first order container */}
      <HomeFirstOrderComponent />
      {/* services */}
      <ServicesComponent />
      {/* about me */}
      <AboutMe />
      {/* message me */}
      <MessageMe />
    </div>
  );
};

export default Home;
