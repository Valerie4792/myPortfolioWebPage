import React from "react";
import Nav1 from "./Nav1";
import { Container, Image, Row, Col, Button, Carousel, Fade } from "react-bootstrap";
import DealNoDeal from "../assets/Proj/DealNoDeal.png";
import DadJokes from "../assets/Proj/DadJokes.png";
import DigitalClock from "../assets/Proj/DigitalClock.png";
import MagicEightBall from "../assets/Proj/MagicEightBall.png";
import SimpleCalc from "../assets/Proj/SimpleCalc.png";
import ToDoList from "../assets/Proj/ToDoList.png";
import Top10 from "../assets/Proj/Top10.png";
import WeatherApp from "../assets/Proj/WeatherApp.png";
import { useNavigate } from 'react-router-dom';
import arrowDwn from "/src/assets/bgimages/arrowDwn.png";




const Projects = () => {

  let navigate = useNavigate();
  const handleSubmit = () =>{
    navigate("/Skills")
  }

  return (
    <Container fluid>
      <Nav1 />

      <h1 className="projectsHeader">PROJECTS</h1>
      <div className="projectLine"></div>
      {/* <Carousel fade className="mt-5">
      <Carousel.Item className="d-flex justify-content-center">
        <DealNoDeal text="First slide" />
    
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
       
        
    
        
    
      
      </Carousel.Item>
      <Carousel.Item>
 <DigitalClock text="Second slide" />
        <Carousel.Caption>
       
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <MagicEightBall text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <SimpleCalc text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ToDoList text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Top10 text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <WeatherApp text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <DadJokes text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <MagicEightBall text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>   
   
   
     */}
      <Col className="arrowDwnBtn mx-5">
            <Image onClick={handleSubmit} src={arrowDwn} />
      </Col>
    </Container>
   
    
  );
};

export default Projects;
