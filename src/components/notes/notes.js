import React from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid/v4';


//  jlm  notes.js === NoteCreateForm.js


export default class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            content: '',
            editable: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (name) => (e) => {
        this.setState({ [name]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addNote({...this.state, id: uuid() });
    }

    render() {
        return (
            <div className="notes">
                <form onSubmit={this.handleSubmit}>
                    <label>Title</label>
                    <input
                        type="text"
                        onChange={this.handleChange('title')} />
                    <input
                        type="text"
                        onChange={this.handleChange('content')} />
                    <input
                        type="checkbox"
                        onChange={this.handleChange('editable')} />
                    <input type="submit" />
                </form>

                {Object.keys(this.props.notes).map((id, i) =>
                    <li key={id}>
                        <Link to={`note/${id}`}>{this.props.notes[id].title}</Link>
                    </li>
                )}
            </div>
        );
    }
}