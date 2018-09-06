import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import Header from './header/header.js';
// import Footer from './footer/footer.js';
// import Home from './home/home.js';
// import Items from './items/items.js';
// import Item from './item/item.js';

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
    // this.addNote = this.addNote.bind(this);
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={Landing} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/notes" component={Notes} />
          <Route path="/note" component={Note} />
          <Route path="/note/:id" component={(props) =>
            <Item
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