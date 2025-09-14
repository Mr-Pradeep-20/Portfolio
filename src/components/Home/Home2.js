import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m passionate about building real-world applications that solve
              everyday problems.
              <br />
              <br />
              I am proficient in technologies like
              <i>
                <b className="purple"> Python, JavaScript, and SQL</b>
              </i>
              , prefer working on both 'backend and frontend'.
              <br />
              <br />
              My key interests include developing
              <i>
                <b className="purple"> Full Stack Web Applications</b>
              </i>
              &nbsp; using
              <b className="purple"> Django and React.js</b>.
              <br />
              <br />
              I’ve also worked on a
              <i>
                <b className="purple"> Food Recommendation System</b>
              </i>
              &nbsp; that suggests food based on user
              <b className="purple"> mood and taste</b>, integrating database
              systems, REST APIs, and dynamic frontend interfaces.
              <br />
              <br />
              I'm currently learning how to integrate advanced features like
              <b className="purple">
                {" "}
                gesture-based input, smart search, and real-time user feedback
              </b>{" "}
              in web apps.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Mr-Pradeep-20"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Badu10_Np"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pradeepbadu19/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pradeep_badu_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
