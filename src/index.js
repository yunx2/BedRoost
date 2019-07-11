import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';


ReactDOM.render(
    <App location={window.location.pathname}/>,
  document.getElementById('app')
);