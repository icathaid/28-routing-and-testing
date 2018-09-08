'use strict';
import React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';

import Landing from './landing/landing.js';
import Dashboard from './dashboard/dashboard.js';
import Notes from './notes/notes.js';
import Note from './note/note.js';

import '../style/app.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  addNote(data) {
    let note = {};
    let editable = false;
    if(data.editable === 'on'){
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

  deleteNote(idToDelete) {
    // let filteredArray = this.state.notes.filter(id => id !== idToDelete);
    // this.setState({ notes: filteredArray });
    console.log(idToDelete);
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <nav>
            <Link to="/">Landing</Link>
            <Link to="/dashboard">Dashboard</Link>
          </nav>
          <Route exact path="/" component={Landing} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/notes" component={() =>
            <Notes addNote={this.addNote}
              notes={this.state.notes}
            />
          } />
          <Route exact path="/note/:id" component={(props) =>
            <Note
              {...props}
              notes={this.state.notes}
            />
          }
          />
        </React.Fragment>
      </BrowserRouter>
    )
  }
}