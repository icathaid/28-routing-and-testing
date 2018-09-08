import React from 'react';

export default class Note extends React.Component {
    constructor(props) {
        super(props);
        this.buttonClick = this.buttonClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    buttonClick(e) {
        console.log('edit button was clicked');
    }
    // xhandleDelete = (id) => (e) => {
    //     let source = 'https://stackoverflow.com/questions/36326612/delete-item-from-state-array-in-react';
    //     this.props.deleteNote(id);
    // }
    handleDelete(e) {
       alert('delete button was clicked');
    }
    render() {
        let isEditable = this.props.notes[this.props.match.params.id].editable;
        let button;
        if (isEditable) {
            button = <button onClick={this.buttonClick}>Edit This Note</button>

        }
        else {
            button = <span>The author has chosen not to make this content editable.</span>
        }

        return (
            <React.Fragment>
                <h2>{this.props.notes[this.props.match.params.id].title}</h2>
                <p>{this.props.notes[this.props.match.params.id].content}</p>
                {button}
                <button onClick={this.handleDelete}>Delete this note</button>
            </React.Fragment>
        );
    }
}