import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import App from './views/App';

ReactDOM.render((
  <Router>
    <Route path="/" component={App} />
    <Route path="/getStarted" component={App} />
  </Router>
), document.getElementById('root'))