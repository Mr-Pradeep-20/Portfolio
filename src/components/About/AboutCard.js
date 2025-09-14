import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Pradeep Badu</span> from{" "}
            <span className="purple">Dhangadhi, Nepal</span>.
            <br />
            I am currently pursuing my Bachelor's degree in Computer Science and Engineering (B.E)
            <br />
            at <span className="purple">NITTE Meenakshi Institute of Technology</span>, Bangalore.
            <br />
            <br />
            Apart from coding, here are a few things I enjoy doing:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Movies & Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Sleeping on Weekends 😅
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that makes a difference!"
          </p>
          <footer className="blockquote-footer">Pradeep Badu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
