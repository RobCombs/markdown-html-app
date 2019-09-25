import React from 'react';
import './App.css';
import MarkdownTranslator from './components/markdown';
import logo from './happy-monkey.png';

function App() {
  return (
    <div className="Container">
      <h3>Rob being goofy</h3>
      <div className="Logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="Buttons">
        <MarkdownTranslator />
        <div className="Results" id="Results">
        </div>
      </div>

    </div>
  );
}

export default App;
