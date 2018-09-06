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
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let id = uuid();
        let text = e.target.value;
        // jlm add other note params to setstate inputs next line
        this.setState({ id, text });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <div className="notes">
                <form onSubmit={this.handleSubmit}>
                    <input name="add" onChange={this.handleChange} />
                </form>
                {Object.keys(this.props.notes).map((id, i) => 
                <li key={id}>
                <Link to={`note/${id}`}>{this.props.notes[id]}</Link>
                </li>
                    )}
            </div>
        );
    }
}

{/* <Link to={`/note/${id}`}>{this.props.note[id]}</Link> */}