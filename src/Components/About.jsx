import React from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import Nav1 from "./Nav1";
import helloPic from "/src/assets/bgimages/helloPic.png";
import arrowDwn from "/src/assets/bgimages/arrowDwn.png";

const About = () => {
  return (
    <div className="aboutBG">
      <Container-Fluid>
        <Nav1 />
        <Row style={{ margin: 100 }}>
          <Col md={7}>
            <h1 className="about">ABOUT</h1>
            <div className="aboutLine"></div>
            <p className="aboutBold m-0 p-0">I'm {"<VALERIE/>"},</p>
            <p className="aboutBold m-0 p-0">a junior front-end developer.</p>
            <p className="aboutReg">
              I create websites and apps that are practical, playful, and fun
              for the user.
            </p>
          </Col>
          <Col md={5}>
            <Image src={helloPic} className="aboutPic" />
          </Col>
        </Row>
        <Row>
          <Col className="arrowDwnBtn mx-5">
          <Image src={arrowDwn} />
        </Col>   
        </Row>
       
      </Container-Fluid>
    </div>
  );

};

export default About;
