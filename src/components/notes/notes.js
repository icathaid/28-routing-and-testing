import React from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid/v4';

export default class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            text: '',
            // jlm need to add the rest of the note parameters once this is working
        }
        this.addNote = this.addNote.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    addNote(data) {
        let note = {};
        note[data.id] = data.text;
        this.setState(Object.assign(this.state.notes, note));
        console.log('addnote');
    }

    handleChange(e) {
        let id = uuid();
        let text = e.target.value;
        // jlm add other note params to setstate inputs next line
        this.setState({ id, text });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.addNote(this.state);
        console.log('handleSubmit');
    }
    render() {
        return (
            <div className="notes">
                <Link to="/note">Note 1</Link>
                <form onSubmit={this.handleSubmit}>
                    <input name="add" onChange={this.handleChange} />
                </form>
            </div>
        )
    }
    // jlm update className in css to "notes"
    // need to add form inputs to create new notes
}

// <ul>
//                     {
//                         Object.keys(this.props.notes).map( (id, i) => 
//                     <li key={id}>
//                     <Link to={`/note/${id}`}>{this.props.note[id]}</Link>
//                     </li>
//                 )
//                     }
//                 </ul>