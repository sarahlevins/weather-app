import React from 'react';
import AppContainer from './containers/AppContainer';
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <AppContainer />
    </Router>
  );
}

export default App;