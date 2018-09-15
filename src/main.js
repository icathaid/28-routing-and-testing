import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app.js';
// import "./styles.css";

function Main() {
  return (
    <div className="app">
      <App />
    </div>
  )
}

ReactDom.render(<Main />, document.getElementById('root'));