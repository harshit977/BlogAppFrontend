import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import { Nav } from 'react-bootstrap';


function NavBar() {
    return (
        <Navbar style={{backgroundColor:'skyblue'}}  expand="lg">
        <Navbar.Brand href="#home" style={{fontSize:20,fontFamily:'sans-serif'}} >Blog App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mr-auto">
          <Nav.Link><Link to="/"> Home </Link></Nav.Link>
            <Nav.Link><Link to="/allblogs"> All Blogs </Link></Nav.Link>
          </Nav>
          <NavDropdown title="Filter" id="basic-nav-dropdown" className="ml-auto">
            <NavDropdown.Item href="#action/3.1">Title</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Author</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Description</NavDropdown.Item>
          </NavDropdown>
          <Form inline >
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  
export default NavBar;
  