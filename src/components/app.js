'use strict';
import React from 'react';
import { NavLink, BrowserRouter, Route } from 'react-router-dom';

import Landing from './landing/landing.js';
import Dashboard from './dashboard/dashboard.js';
import '../style/app.scss';

export default class App extends React.Component {

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <nav>
            <NavLink to="/">Landing</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </nav>
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
          
        </React.Fragment>
      </BrowserRouter>
    )
  }
}