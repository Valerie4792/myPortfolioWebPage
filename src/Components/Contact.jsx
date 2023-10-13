import React from 'react'
import {Button, Col, Row, Nav, Form,} from 'react-bootstrap'
import Nav1 from './Nav1'

const Contact = () => {
  return (
    <>
    <Nav1/>
    <Form style={{width:'40',marginLeft:"33%",marginTop: "10%",backgroundColor: "lightseagreen",padding:80, borderRadius: 5,}}>
    <h1 className='text-center'>Login</h1>
  <Form.Group className="mb-3" controlId="Username">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter Username" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  />
  </Form.Group>
  
  <Button variant="outline-primary">
    Submit
  </Button>
  <p className='mt-2'> If you don't have an account</p>
  
</Form>
    </>
    
  )
}

export default Contact
