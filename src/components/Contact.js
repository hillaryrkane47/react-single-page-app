import React, { Component } from 'react';
import social from '../data/social';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      social: social
    }
  }

  renderSocial() {
    // const imgStyles={maxWidth: '400px', maxHeight: '400px'}
    return this.state.social.map(hill=> {
      return(
        <div key={hill.name}>
          {hill.name} | <a href={hill.link}>{hill.desc}</a>
          <br/><br/>
        </div>
      )
    })
  };

  render() {
    const divStyle={paddingLeft: '50px'};
    return (
      <div style={divStyle}>
        <h3>Connect with me!</h3>
        <br /><br />
          { this.renderSocial() }
        </div>
    );
  }
}

export default Contact;
