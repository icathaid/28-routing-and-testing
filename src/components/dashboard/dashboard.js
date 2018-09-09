import React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import Notes from '.././notes/notes.js';
import Note from '.././note/note.js';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
        };
        this.addNote = this.addNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
    }

    //  hacky way that i wrote it, i think this is causing the double additions to state
    // addNote(data) {
    //     let note = {};
    //     let editable = false;
    //     if (data.editable === 'on') {
    //         editable = true;
    //     }
    //     note[data.id] = {
    //         id: data.id,
    //         title: data.title,
    //         content: data.content,
    //         editable: editable
    //     };
    //     this.setState(Object.assign(this.state.notes, note));
    //     console.log(note);
    //     console.log(this.state.notes);
    // }

    
    //  from the demo:
    addNote = note => {
        let notes = [...this.state.notes, note];
        this.setState({
            notes
        });
    }

    removeNote(idToDelete) {
        let filteredArray = this.state.notes.filter(id => id !== idToDelete);
        this.setState({ notes: filteredArray });
        console.log(idToDelete);
    }

    render() {
        return (
            <BrowserRouter>
            <React.Fragment>
                <Route path="/notes" component={() =>
                    <Notes addNote={this.addNote}
                        notes={this.state.notes}
                    />} />
                <Route exact path="/note/:id" component={(props) =>
                    <Note
                        {...props}
                        notes={this.state.notes}
                    />} />
                <h2>Dashboard</h2>
                <Link to="/notes">Notes</Link>
            </React.Fragment>
            </BrowserRouter>
        );
    }
}