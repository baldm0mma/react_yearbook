import React, { Component } from 'react';
import './FormInput.css';

class FormInput extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: '',
      quote: '',
      superlative: '',
      status: ''
    };
  }

  handleStateChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.state.status);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewHuman(this.state);
    console.log(this.state.name);
  };

  render() {
    const { name, quote, superlative } = this.state;
    return (
      <>
        <h2>Add a human</h2>
        <form className='form-input'>
          <input
            type='text'
            name='name'
            value={name}
            placeholder='Name'
            onChange={this.handleStateChange}
          />
          <input
            type='text'
            name='quote'
            value={quote}
            placeholder='Quote'
            onChange={this.handleStateChange}
          />
          <input
            type='text'
            name='superlative'
            value={superlative}
            placeholder='Superlative'
            onChange={this.handleStateChange}
          />
          <select>
            <option
              name='status'
              value='staff'
              onChange={this.handleStateChange}
            >
              Staff
            </option>
            <option
              name='status'
              value='student'
              onChange={this.handleStateChange}
            >
              Student
            </option>
          </select>
          <button onClick={this.handleSubmit}>Submit!</button>
        </form>
      </>
    );
  }
}

export default FormInput;
