import React from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import lampImg from "/src/assets/bgimages/lamp.png";
import Nav1 from "./Nav1";
import arrowDwn from "/src/assets/bgimages/arrowDwn.png"
import homeBG from "/src/assets/bgimages/homeBG.png"


const Home1 = () => {
  return (
    
    <div className="containerHomeBg m-0 p-0">
    <Container-Fluid >
       <Nav1/> 
     <br/>  
     <br/>  
     <br/>  
     <br/>  
     <br/>  
      <Row>  
        
      <Col md={12} className="valerie mt-5">
          <div className="text-container m-5 p-5">
            <div className="line"></div>
            <h1>{"<VALERIE/>"}</h1>
          </div>
        </Col>
{/* 
        <Col md={4} className=" m-5 p-1 imgCol">
          <Image src={lampImg} className="lampImg" />
        </Col>  */}
      
      </Row>
      <Row>
        <Col>
        <p className="homeTxtBold">A Front-End Web Developer</p>
        <p className="homeTxtReg">Imagine it. Design it. Create it.</p>
        </Col>
      </Row>
<Row className="mt-5">
    <Col>
    <Button className='ml-4 navContactBtn'>Contact</Button>
    </Col>
    <Col className="arrowDwnBtn">
    <Image src={arrowDwn} />
    </Col>
   
        
     
      
   
    

</Row>
  
    
   
    </Container-Fluid>
    </div>
  );
};

export default Home1;
