import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import GlobalStyles from './themes/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <App />
    <GlobalStyles />
  </React.StrictMode>,
)

