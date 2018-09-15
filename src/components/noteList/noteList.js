import React from "react";
import NoteItem from ".././noteItem/noteItem.js";

export default props => (
    <ul>
        {props.notes.map(note => <NoteItem key={note.id} note={note} {...props} /> )}
    </ul>
);