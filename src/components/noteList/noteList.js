import React from "react";
import NoteItem from "./NoteItem";

export default props => (
    <ul>
        {props.notes.map(note => <NoteItem key={note.id} note={note} {...props} /> )}
    </ul>
);