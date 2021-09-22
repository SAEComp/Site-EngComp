import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import GlobalStyles from './themes/GlobalStyles';

ReactDOM.render(
  <>
    <App />
    <GlobalStyles />
  </>,
  document.getElementById('root')
);
