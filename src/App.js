import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
