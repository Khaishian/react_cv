import React from "react";
import "./ProjectPoints.css";
import { Button } from "./Button";

function ProjectPoints() {
  return (
    <div className="project-background">
      <div className="project-container">
        <div className="project-cards-container">
          <div className="project-card-wrapper atsc">
            <p>2021 - Now</p>
            <div className="project-card">
              <h2>Demonstrator at Advanced Technology Studies Centre (atSC)</h2>
              <p>
                So, I was invited to work as a part time demonstrator and
                developer for an upcoming course that is going to be launched by
                Advanced Technology Studies Centre (atSC). My job scope is to
                work in a team to develop the materials for the course that I
                will be tutoring for this Django and Python web programming
                course which its materials mainly revolve around a demo app
                system for trading algorithm as well as backtesting built with
                Django framework
                <a href="https://www.atsc.org.my/" target="_blank">
                  &nbsp;...more
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="project-cards-container">
          <div className="project-card-wrapper darul">
            <p>2020</p>
            <div className="project-card">
              <h2>
                Website Team Lead for Primary School Webpage (Al-Amin Darul
                Musthofa School)
              </h2>
              <p>
                This was a project for my semester 3 course, WIX2002 PROJECT
                MANAGEMENT. In short, I led a team of 5 to rebuild a primary
                school's outdated web page with a famous CMS, WordPress. The
                whole project took around 3 months from forming the project
                organization, meeting the client (headmistress), getting the
                user requirements, building the website on a collaborative
                environment, client review session, and finally delivery and
                deployment phase
                <a href="http://hairulnizam.my/testdarul" target="_blank">
                  &nbsp;...more
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="project-cards-container">
          <div className="project-card-wrapper smart">
            <p>2020 - Now</p>
            <div className="project-card">
              <h2>
                Tech team in developing a mobile app (SMART) for HIV patients
              </h2>
              <p>
                This was considered my first project back in first year as a
                student. Basically, we collaborated with University Malaya
                Medical Centre (UMMC) working on a mobile app called SMART,
                which its purpose is to keep track of HIV patients records, e.g.
                last vaccination, last checked health status, etc. This app also
                serves as a reminder for patients to obtain their next
                vaccination, checkups and more. This app was built as a native
                Android app only for now and is currently under development
                <a href="https://www.ummc.edu.my/" target="_blank">
                  &nbsp;...more
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="project-cards-container">
          <div className="project-card-wrapper demo">
            <p>2021 - Now</p>
            <div className="project-card">
              <h2>
                Demonstrator for Network Technology Foundation Subject
                (University of Malaya)
              </h2>
              <p>
                Currently, I am working as a demonstrator in a course taken by
                me previously back in first year. The course is WIA1005 NETWORK
                TECHNOLOGY FOUNDATION which is about the basics of networking.
                My main role here is to assist the lecturer during the lab
                sessions
                <a href="/files/demo.pdf" download>
                  &nbsp;...more
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="project-cards-container">
          <div className="project-card-wrapper hcia">
            <p>2020</p>
            <div className="project-card">
              <h2>HCIA - Routing & Switching (Huawei)</h2>
              <p>
                Back in first year, we as students were offered by Huawei to sit
                for HCIA Routing & Switching exam with free vouchers. We were
                given about a month with access to their course materials to
                prepare for the exam. Later, I managed to pass the certification
                with the free voucher given
                <a href="/files/hcia.pdf" download>
                  &nbsp;...more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPoints;
