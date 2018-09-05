import React from 'react';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        console.log('  -=THIS.PROPS=-   ', this.props);
    }
    render() {
        return (
            <h2>This is going to be an individual note.</h2>
        );
    }
}