import React from 'react';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <h2>This is going to be an individual note.</h2>
                <span>{this.props.notes[this.props.match.params.id].title}</span>

            </React.Fragment>
        );
    }
}