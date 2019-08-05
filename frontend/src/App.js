import React from 'react';
import logo from './logo.svg';
import './App.css';
const secret = require('./secret.json')

// axios.get(`https://www.googleapis.com/youtube/v3/search?key=${apikey}&part=snippet&q=${query}`)

function App() {
  console.log(secret)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn to be supreme Testing environment
        </a>
      </header>
    </div>
  );
}

export default App;
