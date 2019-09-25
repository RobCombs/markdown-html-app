import React from 'react';
import './App.css';
import MarkdownTranslator from './components/markdown';
import logo from './happy-monkey.png';

function App() {
  return (
    <div className="Container">
      <div className="Header">
        <h2>Markdown to HTML converter</h2>
      </div>
      <h3>Rob being goofy</h3>
      <div className="Logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="Buttons">
        <MarkdownTranslator />
        <div className="Results" id="Results">
        </div>
      </div>
      <div class="Contributors">A <i><b>special thanks</b></i> to our contributors: Coty Rosenblath, Lauren Coon, Kristin Lukich,
        Kammy Wesley,
        Kevin Glover,
        Rafiya Javed, Emily Curtin, Shounak Kulkarni and Frankie Libbon
      </div>
    </div >
  );
}

export default App;
