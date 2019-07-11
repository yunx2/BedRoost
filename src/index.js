import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const title = {listingTitle};

ReactDOM.render(
  <div>{title}
    <App location={document.location.pathname} />
  </div>,
  document.getElementById('app')
);