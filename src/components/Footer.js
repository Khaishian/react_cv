import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { Scroll } from "./Scroll.js";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-wrap">
        <small class="website-rights">
          "The only way to learn a new programming language is by writing
          programs in it." - Dennis Ritchie
        </small>
        <small class="website-rights">khaicodes ©2021</small>
      </div>
    </div>
  );
}

export default Footer;
