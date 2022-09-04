import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import init, { greet } from 'wasm-worker'

function App() {
  useEffect(() => {
    init().then(() => {
      greet()
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
