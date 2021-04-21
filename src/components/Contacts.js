import React from "react";
import "./Contacts.css";
import CardItem from "./CardItem";

function Contacts() {
  return (
    <div className="contacts">
      <div className="contact-info-container">
        <div className="contact-info">
          <img className="contact-picture" src="./../images/khai_coat.jpg" />
          <div className="contact-text">
            <h1>Contact Information</h1>
            <p>Github: Khaishian</p>
            <p>Linkedin: Khai Shian Chow</p>
            <p>Tel No.: +60179179116</p>
            <p>E-mail: khaicodes99@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="or-contact">
        <h1>Get In Touch</h1>
        <i class="far fa-handshake"></i>
      </div>
      <div className="white-card-container">
        <a
          className="white-card li"
          href="https://www.linkedin.com/in/khai-shian-chow-9010a41b7/"
          target="_blank"
        >
          <i class="fab fa-linkedin"></i>
          <h1>LinkedIn</h1>
        </a>
        <a
          className="white-card gh"
          href="https://github.com/Khaishian"
          target="_blank"
        >
          <i class="fab fa-github"></i>
          <h1>GitHub</h1>
        </a>
      </div>
      <div className="white-card-container">
        <a
          className="white-card em"
          href="mailto: khaicodes99@gmail.com"
          target="_blank"
        >
          <i class="fas fa-envelope"></i>
          <h1>E-mail</h1>
        </a>
        <a
          className="white-card wa"
          href="https://api.whatsapp.com/send?phone=+60179179116"
          target="_blank"
        >
          <i class="fab fa-whatsapp"></i>
          <h1>WhatsApp</h1>
        </a>
      </div>
    </div>
  );
}

export default Contacts;
