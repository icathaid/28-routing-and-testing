import React, { Component } from "react";
import uuid from "uuid/v4";

//  jlm what is placeholder="title" doing?

export default class NoteCreateForm extends Component {
    state = {
        editing: false,
        completed: false,
        content: "",
        title: ""
    };

    onSubmit = event => {
        event.preventDefault();
        this.props.onSubmit({ ...this.state, id: uuid() });
        this.setState({
            title: this.state.title,
            content: this.state.content
        });
    }

    onChange = event => {
        const val =
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value;
        const changedBit = {
            [event.target.name]: val
        };
        this.setState(changedBit);
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} onChange={this.onChange}>
                <input name="title" className="title" value={this.state.title} />
                <textarea name="content" className="content" value={this.state.content} />
                <label>
                    <span>editing</span>
                    <input name="editing" type="checkbox" />
                </label>
                <label>
                    <span>completed</span>
                    <input name="completed" type="checkbox" />
                </label>
                <button>Create Note</button>
            </form>
        );
    }
}
