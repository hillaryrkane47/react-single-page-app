import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import {Icon} from 'react-fa';


export default (props) => {
  return (
    <div className="container">
      <Navbar fluid collapseOnSelect>
        <Nav>
          <IndexLinkContainer to="/">
            <NavItem><Icon name="home" /> Home</NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/about/hillary">
            <NavItem>About</NavItem>
          </LinkContainer>
          <LinkContainer to="/contact">
            <NavItem>Contact</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    </div>
  );
}

