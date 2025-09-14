import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import FCFS from "../../Assets/Projects/FCFS cpu schedular.png";
import SCAN from "../../Assets/Projects/scan disk scheduling.png";
import snake from "../../Assets/Projects/snake game.png";
import songSmith from "../../Assets/Projects/songsmith.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={songSmith}
              isBlog={false}
              title="SongSmith"
              description="A Python-based CLI music player that enables users to play, download, and manage songs directly from the terminal. It integrates YouTube downloading, playlist management, and a favorites system for a seamless command-line experience."
              ghLink="https://github.com/Mr-Pradeep-20/songSmith.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FCFS}
              isBlog={false}
              title="FCFS CPU Scheduling Visualization"
              description="An educational project demonstrating the First-Come, First-Served (FCFS) scheduling algorithm in Operating Systems, visualizing how processes are executed in the order they arrive with clear step-by-step representation."
              ghLink="https://github.com/Mr-Pradeep-20/FCFS-Algorithm-in-Operating-Sysytem.git"
              demoLink="https://mr-pradeep-20.github.io/FCFS-Algorithm-in-Operating-Sysytem/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SCAN}
              isBlog={false}
              title="SCAN Disk Scheduling Visualization"
              description="A visualization of the SCAN disk scheduling algorithm, showing how disk head movements are optimized to reduce seek time, helping in better understanding of OS scheduling concepts."
              ghLink="https://github.com/Mr-Pradeep-20/SCAN-Algorithm-in-Operating-System.git"
              demoLink="https://mr-pradeep-20.github.io/SCAN-Algorithm-in-Operating-System/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={null}
              isBlog={false}
              title="Food Recommendation System"
              description="A full-stack web application built with Django and React that recommends foods based on user mood and taste preferences. It includes food images, descriptions, and restaurant details, providing a personalized recommendation experience."
              underProgress={true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Snake Game"
              description="A Python implementation of the classic Snake game where the player controls a snake to collect food, grow in size, and avoid collisions. Focused on user interactivity, logic, and game design fundamentals."
              ghLink="https://github.com/Mr-Pradeep-20/Sanke_Game.git"
              demoLink="https://mr-pradeep-20.github.io/Sanke_Game/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
