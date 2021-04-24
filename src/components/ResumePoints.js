import React from "react";
import "./ResumePoints.css";
import { Button } from "./Button";

function ResumePoints() {
  return (
    <div className="resume-background">
      <div className="resume-container">
        <div className="resume-cards-container">
          <div className="download-container">
            <div className="download-files">
              <i class="fas fa-file-pdf"></i>
              <p className="download-text">resume.pdf</p>
            </div>
          </div>
          <div className="download">
            <a
              className="download-button"
              href="/files/resume_ks_chow_v2.pdf"
              download
            >
              DOWNLOAD
            </a>
          </div>
          <div className="resume-card intro">
            <h2>Introduction</h2>
            <p>
              A passionate computer science student of University of Malaya (UM)
              who strives mainly in web development. I am always ready to learn
              new stacks, frameworks, languages as well as developing new skill
              sets.
            </p>
          </div>
          <div className="resume-card personal">
            <h2>Personal Information</h2>
            <div className="personal-info">
              <img className="khai-person" src="./../images/khai_round.png" />
              <div className="personal-table-container">
                <table>
                  <tr>
                    <td>Name:</td>
                    <td>Chow Khai Shian</td>
                  </tr>
                  <tr>
                    <td>Age:</td>
                    <td>22 years old</td>
                  </tr>
                  <tr>
                    <td>University:&nbsp;&nbsp;</td>
                    <td>University of Malaya</td>
                  </tr>
                  <tr>
                    <td>Course:</td>
                    <td>Bachelor of Computer Science</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>(Computer System and Network)</td>
                  </tr>
                  <tr>
                    <td>Year:</td>
                    <td>2</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="resume-card edu">
            <h2>Education</h2>
            <table>
              <tr>
                <td>
                  <img className="f6-logo" src="./../images/kt6pj_logo.png" />
                </td>
                <td>
                  <ul>
                    <p>Kolej Tingkatan Enam Petaling Jaya </p>
                    <li>2017 - 2018</li>
                    <li>STPM CGPA 4.0</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <img className="um-logo" src="./../images/um_logo.png" />
                </td>
                <td>
                  <ul>
                    <p>University of Malaya</p>
                    <li>2019 - Now</li>
                    <li>current CGPA 3.97</li>
                  </ul>
                </td>
              </tr>
            </table>
          </div>
          <div className="resume-card wdlang">
            <h2>Web Dev Languages</h2>
            <div className="wdlang-list">
              <ul>
                <li>Vanilla JS</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>ReactJS</li>
              </ul>
              <ul>
                <li>Python</li>
                <li>Django</li>
                <li>MySQL</li>
                <li>Java</li>
              </ul>
            </div>
          </div>
          <div className="resume-card lang">
            <h2>Languages</h2>
            <div className="lang-list">
              <ul>
                <li>English</li>
                <li>Malay</li>
                <li>Chinese</li>
                <li>Japanese</li>
              </ul>
            </div>
          </div>
          <div className="checkout-container">
            <div className="checkout">
              <p className="checkout-text">Check out my projects here!</p>
              <a className="project-button" href="/products">
                PROJECTS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumePoints;
