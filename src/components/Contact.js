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
          <p>{hill.name} | {hill.desc}</p>
          <br/>
        </div>
      )
    })
  };

  render() {
    return (
      <div>
        <h3>Connect with me!</h3>
        <br /><br />
          { this.renderSocial() }
        </div>
    );
  }
}

export default Contact;
