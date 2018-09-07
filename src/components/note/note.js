import React from 'react';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <h2>{this.props.notes[this.props.match.params.id].title}</h2>
                <p>{this.props.notes[this.props.match.params.id].content}</p>

            </React.Fragment>
        );
    }
}