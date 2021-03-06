import React, { Component } from 'react';
import { Link } from 'react-router';
import facts from '../data/facts.js';

class About extends Component {
  render(){
    const imageStyles = {maxWidth: '500px', maxHeight: '400px'}
    const currentFact = this.props.params.factName;
    const { name, desc, img } = facts[currentFact];
    let nextFact = facts[currentFact].nextFact ? `/about/${facts[currentFact].nextFact}` : "/"


    return (
      <div className="about">
        <h1>About</h1>
        <img style={ imageStyles } alt="fact" src={img} />
        <h2>{ name }</h2>
        <h4>{ desc }</h4>
        <Link to={`${nextFact}`}>Next Fact</Link>
      </div>
    );
  }
}

export default About;




