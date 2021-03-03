import Routes from "./Routes"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
//Used to wrap our links
import {LinkContainer} from "react-router-bootstrap"

import "./App.css";
//activeKey is used to grab current path the user is on from window
function App() {
  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <LinkContainer to="/">
        <Navbar.Brand className="font-weight-bold text-muted">
        Scratch
        </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <LinkContainer to="/signup">
              <Nav.Link>Signup</Nav.Link> 
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </Nav> 
        </Navbar.Collapse>
      </Navbar>
    <Routes /> 
  </div>
  );
}
export default App;