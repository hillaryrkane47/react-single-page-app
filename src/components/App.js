import React from 'react';
import Navbar from './Navbar';


export default (props) => {
  return (
    <div className="nav-container">
      <Navbar />
      { props.children }
    </div>
  );
}

