import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dantist from "../../Assets/Projects/dantist.png";
import tool from "../../Assets/Projects/tool.png";
import laptop from "../../Assets/Projects/laptop.png";

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
              imgPath={tool}
              isBlog={false}
              title="Mobile manufecture tool"
              description="Complete and fully functional manufacture web site with advanced functionalities build with
                    React.JS || NodeJS || Express.js || MongoDB || React firebase Hooks and || Firebase (For authentication) ||
                    tailwind CSS
                    "
              link="https://github.com/Saykot43/mobile_manufecture_client"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={laptop}
              isBlog={false}
              title="MERN Stack Laptop warehouse management system"
              description="Complete and fully functional warehouse management site with advanced functionalities, Use firebase login & logout system
                  User can edit, add and delete product
                  Different user role such as added product route"
              link="https://github.com/Saykot43/Lapto-Store"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dantist}
              isBlog={false}
              title="ReactJs Dentist-portal"
              description="Complete and fully site built with React.JS, React firebase hooks.
              Technology Stack: React.JS, React Bootstrap, React-toastify, React router Dom v6.  
              "
              link="https://github.com/Saykot43/Dentist-portal"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
