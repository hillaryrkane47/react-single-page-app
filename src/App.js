import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav pullLeft>

              <LinkContainer to="/">
                <NavItem>Home</NavItem>
              </LinkContainer>

              <LinkContainer to="/about">
                <NavItem>About</NavItem>
              </LinkContainer>

              <LinkContainer to="/contact">
                <NavItem>Contact</NavItem>
              </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
