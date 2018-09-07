import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

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
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  addNote(data) {
    let note = {};
    note[data.id] = data.text;
    this.setState(Object.assign(this.state.notes, note));
    console.log(note);
  }
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
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