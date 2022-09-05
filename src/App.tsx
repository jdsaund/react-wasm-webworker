import React, { useEffect, useState } from 'react';
import { wrap } from 'comlink'
import logo from './logo.svg'
import './App.css'
import { WasmWorker } from './types'

/* eslint import/no-webpack-loader-syntax: off */
import workerScriptUrl from 'worker-plugin/loader?filename=[name].[contenthash].web.worker.js!./workers/web.worker'

const worker = new Worker(workerScriptUrl)
const { initialize, reverseString } = wrap<WasmWorker>(worker)

function App() {
  const [value, setValue] = useState<string>('Learn React')

  useEffect(() => {
    initialize().then(() => reverseString(value)).then(setValue)
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
          {value}
        </a>
      </header>
    </div>
  );
}

export default App;
