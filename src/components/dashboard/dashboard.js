import React from 'react';
import { Link } from 'react-router-dom';

//  jlm instead of link to notes app, can i import notes as a component and run the functionality from here?


export default class Dashboard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2>Dashboard</h2>
                <Link to="/notes">Notes</Link>
            </React.Fragment>
        );
    }
}