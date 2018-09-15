import React, { Component, Fragment } from 'react';
import NoteCreateForm from '.././noteCreateForm/noteCreateForm.js';
import NoteList from ".././noteList/noteList.js";

export default class Dashboard extends Component {
    state = {
        notes: []
    }

    addNote = note => {
        let notes = this.state.notes.slice();
        notes.push(note);
        this.setState({
            notes
        });
    };

    removeNote = id => {
        let notes = this.state.notes.slice();
        let newNotes = notes.filter(notes => notes.id !== id);
        this.setState({
            newNotes
        });
    };

    render() {
        return (
            <Fragment>
                <h1>A Whole Bunch of Notes</h1>
                <NoteCreateForm onSubmit={this.addNote} />
                <NoteList notes={this.state.notes} onRemove={this.removeNote} />
            </Fragment>
        );
    };
};

