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
        console.log(this.state.notes);
        let notes = this.state.notes.slice();
        console.log('notes', notes);
        let newNotes = this.state.notes.filter(notes => notes.id !== id);
        console.log('newNotes', newNotes);
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

