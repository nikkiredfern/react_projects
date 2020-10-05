import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
<<<<<<< HEAD
      {name: 'Nicola', age: 37},
      {name: 'Thomas', age: 37},
      {name: 'Henry', age: 1},
      {name: 'Baby Bump', age: 0}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        {name: newName, age: 37},
        {name: 'Thomas', age: 37},
        {name: 'Henry', age: 1},
        {name: 'Baby Bump', age: 'Coming Soon'}
      ],
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        {name: 'Nicola', age: 37},
        {name: event.target.value, age: 37},
        {name: 'Henry', age: 1},
        {name: 'Baby Bump', age: 'Coming Soon'}
      ]
    } )
  }

  render () {
    const style = {
      backgroundColor: 'white',
      borderRadius: '30px',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
=======
      { name: Nicola, age: 37},
      { name: Thomas, age: 37},
      { name: Henry, age: 1},
      { name: Baby Bump, age: 0}
    ], 
    otherState: 'some other value'
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: Nicola, age: 37},
        { name: Thomas, age: 37},
        { name: Henry, age: 1},
        { name: Baby Bump, age: 0}
      ]
    });
  };

  render() {
>>>>>>> 8bce1895bca5d93f5ab0b8b6f060af707a91e1a6
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style} 
          onClick={() => this.switchNameHandler('WooHoo!!')} >Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Nikki')}
          changed={this.nameChangedHandler} >My Hobbies: Dancing to the Wiggles</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

