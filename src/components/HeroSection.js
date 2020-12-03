import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import Search from "./Search";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1></h1>
      <p>When you're ready for a change, we're ready to help.</p>
      <Search />
    </div>
  );
}

export default HeroSection;
