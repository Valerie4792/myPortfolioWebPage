import React from 'react'
import {Button, Col, Row, Nav} from 'react-bootstrap'

const Nav1 = () => {
  return (
    <Row className='m-0 p-0'>   
   
   <Col md={2} className= 'd-flex justify-content-start'>
       <h1 className='valerie'>{'<VALERIE/>'}</h1>
    </Col >
     

    <Col className= 'd-flex justify-content-center'>
     <Nav defaultActiveKey="/" as="ul" className='mt-4'> 
     
     

    <Nav.Item as="li">
        <Nav.Link href="/" className='navLinkColor'>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1"className='navLinkColor'>About</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2"className='navLinkColor'>Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2"className='navLinkColor'>Skills</Nav.Link>
      </Nav.Item>
       
    
    </Nav></Col>
    <Col md={1} className='d-flex justify-content-end mx-2'>
        <Button className='mt-3 navContactBtn'>Contact</Button>
    </Col>
 <div className="lineNav p-0 m-0 "></div>
 
  
    
   
  
</Row>
  )
}

export default Nav1
