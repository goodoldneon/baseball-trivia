import React from 'react';

import Trivia from './Trivia';
import trivia from '../data/trivia';
import '../styles/App.css';

const App = () => (
  <div className="App">
    <Trivia data={trivia} />
  </div>
);

export default App;
