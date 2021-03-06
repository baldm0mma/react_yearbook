import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import FormInput from './FormInput';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students,
      filter: ''
    };
  }

  addNewHuman = newHuman => {
    const add = { ...newHuman, id: Date.now() };
    this.setState({ [newHuman.status]: [...this.state[newHuman.status], add] });
  };

  createFilterTerm = (term) => {
    this.setState({ filter: term }, () => console.log('1', this.state.filter));
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Turing Yearbook</h1>
        </header>
        <FormInput addNewHuman={this.addNewHuman} createFilterTerm={this.createFilterTerm} />
        <Cohort staff={this.state.staff} students={this.state.students} />
      </div>
    );
  }
}

export default App;
