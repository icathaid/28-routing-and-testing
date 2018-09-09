import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app.js';

function Main (){
  return (
    <App />
  )
}

ReactDom.render(<Main />, document.getElementById('root'));