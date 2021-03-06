import React, { Fragment } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Dashboard from './dashboard/dashboard.js';
import Landing from './landing/landing.js';

export default props => {
    return (
        <BrowserRouter>
            <Fragment>
                <nav>
                    <NavLink to="/">Landing</NavLink>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </nav>
                <Route exact path="/" component={Landing} />
                <Route path="/dashboard" component={Dashboard} />
            </Fragment>
        </BrowserRouter>
    );
};