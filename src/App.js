import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import {Icon} from 'react-fa';
import './index.css';


class App extends Component {
  render() {
    return (

      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Nav>
            <IndexLinkContainer to="/">
              <NavItem><Icon name="home" /> Home</NavItem>
            </IndexLinkContainer>
            <LinkContainer to="/about">
              <NavItem>About</NavItem>
            </LinkContainer>
            <LinkContainer to="/contact">
              <NavItem>Contact</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
        <div>
          { this.props.children }
        </div>

      </div>
    );
  }
}

export default App;
