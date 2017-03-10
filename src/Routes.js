import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default (props) => (
  <Router {...props}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
    </Route>
  </Router>
);
