import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my frontend App!
        </p>
        <a
          className="App-link"
          href="https://github.com/ppoblocki/my-frontend-app-docker"
          target="_blank"
          rel="noopener noreferrer"
        >
          Patryk Pobłocki
        </a>
      </header>
    </div>
  );
}

export default App;
