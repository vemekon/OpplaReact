import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Main from "../Main";

function Home() {
  return (
    <>
      <HeroSection />
      <Main />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
