import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/coding_4.mp4" autoPlay loop muted />
      <div className="profile">
        <img className="picture" src="./../images/khai_coat.jpg" />
        <div>
          <h1>Hello, I'm Khai Shian</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>
      </div>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={(event) => (window.location.href = "/services")}
        >
          RESUME <i class="fas fa-file-alt"></i>
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={(event) => (window.location.href = "/products")}
        >
          PROJECTS <i class="fas fa-tasks"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
