import React from 'react';
import ReactDOM from 'react-dom';
import { Navigator } from './config/navigator';

// main app
import App from './containers/App';
import { Provider } from 'react-redux';
// import rootStore from './redux/root';

ReactDOM.render(
  <App />,
 document.getElementById('app')
);
