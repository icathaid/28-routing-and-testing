import React from 'react';
import { Link } from 'react-router-dom';

export default class Landing extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2>You just landed here</h2>
                <p>This is a brief description of my notes app</p>
                <Link to="/notes">Notes</Link>
            </React.Fragment>
        )
    }
}