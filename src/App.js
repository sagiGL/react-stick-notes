import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Board/>
          <footer className="blockquote-footer">Made by <cite title="Source Title">Sagi Gleizer</cite>
          </footer>
      </div>
    );
  }
}

export default App;
