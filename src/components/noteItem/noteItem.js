import React from "react";

export default props => (
    <li>
        <h2>{process.note.title}</h2>
        <button onClick={() => props.onRemove(props.note.id)}>delete me</button>
        <p>{props.note.content}</p>
    </li>
);