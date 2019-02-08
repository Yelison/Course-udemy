import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person.js';

class App extends Component {
  state= {
    persons: [
      { id: 'asd1', name: 'Yelison', age: 21 },
      { id: 'asd2', name: 'Orlandy', age: 23 },
      { id: 'asd3', name: 'Yudit', age: 21 },
      { id: 'asd4', name: 'Oliver', age: 23 },
      { id: 'asd5', name: 'Anny', age: 16 },
      { id: 'asd6', name: 'Mirian', age: 16 }
    ],
    otherState: 'someother value',
    showPerson: false
  }

nameChangerHandler = (event, id) =>{
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  })
  const person = {
    ...this.state.persons[personIndex]
  }

  person.name = event.target.value;
  const persons = [...this.state.persons];
  persons[personIndex] = person;

this.setState({
    persons: persons})

}; 
deletePersons = (personIndex) => {
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons})

}

togglePersonShow = () => {
  const doesShow = this.state.showPerson;
  this.setState({showPerson: !doesShow})

}
  render() {
    const style = {
      background: 'green',
      color: 'white',
      font: 'inherit',
      padding: '8px',
      border: '1px solid blue',
      cursor: 'pointer',
      ':hover': {
        background: ' lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPerson){
      persons = (
        <div>
          {this.state.persons.map((person, index )=> {
          return <Person 
            click={() => this.deletePersons(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangerHandler(event, person.id)}/> 
        })}
        </div>
      );

      style.background = 'red';
      style[':hover'] = {
        background: 'salmon',
        color: 'black'
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2){
      classes.push('red');
    }
    if (this.state.persons.length <= 1){
      classes.push('bold');
    }
    return (
      <div className="App">
          <h1>Curso Udemy Practica</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button 
          style={style}
          className='Boton'onClick={this.togglePersonShow}>Toggle persons</button>
        {persons}
        
      </div> 
    );
  }
}
export default Radium(App);

