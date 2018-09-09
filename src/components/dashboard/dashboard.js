import React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import Notes from '.././notes/notes.js';
import Note from '.././note/note.js';



//  jlm instead of link to notes app, can i import notes as a component and run the functionality from here?


export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
        };
        this.addNote = this.addNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
    }

    addNote(data) {
        let note = {};
        let editable = false;
        if (data.editable === 'on') {
            editable = true;
        }
        note[data.id] = {
            id: data.id,
            title: data.title,
            content: data.content,
            editable: editable
        };
        this.setState(Object.assign(this.state.notes, note));
    }

    removeNote(idToDelete) {
        // let filteredArray = this.state.notes.filter(id => id !== idToDelete);
        // this.setState({ notes: filteredArray });
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
            </BrowserRouter >
        );
    }
}