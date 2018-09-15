import React, { Component, Fragment } from "react";
import NoteCreateForm from "./NoteCreateForm";
import NoteList from "./NoteList";

export default class Dashboard extends Component {
    state = {
        notes: []
    }

    // jlm in case the other way doesn't work

    // constructor(props) {
    //     super(props);
    //     this.addNote = this.addNote.bind(this);
    //     this.removeNote = this.removeNote.bind(this);
    // }

    // addNote = note => {
    //     let notes = this.state.notes.slice();
    //     notes.push(note);
    //     this.setState({
    //         notes
    //     });
    // };



    addNote(note) {
        let notes = [...this.state.notes, note];
        this.setState({
            notes
        });
    };

    removeNote(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({
            notes
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

