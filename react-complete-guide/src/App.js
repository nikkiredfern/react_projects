import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">This is an app that Nicola is building</h1>
        <Person name="Nicola" age="37" />
        <Person name="Tom" age="37" />
        <Person name="Henry" age="1" />
      </div>
    );
    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
