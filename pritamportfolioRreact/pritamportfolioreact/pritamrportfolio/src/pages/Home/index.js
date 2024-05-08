import React from "react";
import Header from "../../components/Header";
import Intro from "./Introd";
import About from "./About";
import Experiences from "./Experiences";
import Projectp from "./Projectp";
import Courses from "./Courses";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSlider from "./LeftSlider";
import { useSelector } from "react-redux";
function Home() {
  const { portfolioData } = useSelector((state) => state.root);

  return (
    <div>
      <Header />
      {portfolioData && (
        <div className="bg-primary px-40 sm:px-5">
          <Intro />
          <About />
          <Experiences />
          <Projectp />
          <Courses />
          <Contact />
          <Footer />
          <LeftSlider />
        </div>
      )}
    </div>
  );
}

export default Home;
