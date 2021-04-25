import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HomeSection.css";

function HomeSection() {
  return (
    <div className="home-container">
      <video src="/videos/coding_4.mp4" autoPlay loop muted />
      <div className="profile">
        <img className="picture" src="./../images/khai_coat.jpg" />
        <div>
          <h1>Hello, I'm Khai Shian</h1>
          <p>
            Welcome to my webpage! This is a CV webpage I created using ReactJS
            to let anyone get to know me better as well as to showcase my skills
            as a wannabe web dev. I am currently in my second year of my degree,
            Bachelor of Computer Science (Computer System and Network) in
            University of Malaya (UM). I am very interested and passionate in
            pursuing a web dev related career.
          </p>
        </div>
      </div>
      <div className="home-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={(event) => (window.location.href = "/resume")}
        >
          RESUME <i class="fas fa-file-alt"></i>
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={(event) => (window.location.href = "/projects")}
        >
          PROJECTS <i class="fas fa-tasks"></i>
        </Button>
      </div>
    </div>
  );
}

export default HomeSection;
