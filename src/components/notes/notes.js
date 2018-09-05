import React from 'react';
import {Link} from 'react-router-dom';

// jlm going to need these later:

// import uuid from 'uuid/v4';

export default class Notes extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:'',
            text:'',
            // jlm need to add the rest of the note parameters once this is working
        }
        // jlm bind event handlers here (handlesubmit, handlechange, handlesearch?)
    }
    render(){
        return(
            <div className="notes">
            <Link to="/note">Note 1</Link>
            </div>
        )
    }
    // jlm update className in css to "notes"
}