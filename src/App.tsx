import React from 'react';
import _Routes from './routes' ;
import { initializeApp } from 'firebase/app';
import { config } from '../src/config/config';
import { getFirestore } from 'firebase/firestore';

export const Firebase = initializeApp(config.firebaseConfig);

function App() {
  return <_Routes />;
}

export default App;
