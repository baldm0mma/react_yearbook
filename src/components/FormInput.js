import React, { Component } from 'react';
import './FormInput.css';

class FormInput extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: '',
      quote: '',
      photo: 'https://placekitten.com/200/300',
      superlative: '',
      status: 'staff',
      filter: ''
    };
  }

  handleStateChange = e => {
    e.persist();
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.props.createFilterTerm(value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewHuman(this.state);
    this.clearForm();
  };

  clearForm = () => {
    this.setState({
      id: 0,
      name: '',
      quote: '',
      photo: 'https://placekitten.com/200/300',
      superlative: ''
    });
  };

  render() {
    const { name, quote, superlative } = this.state;
    return (
      <>
        <h2>Add a human</h2>
        <form className='form-input ui input'>
          <input
            className='input-style'
            type='text'
            name='name'
            value={name}
            placeholder='Name'
            onChange={this.handleStateChange}
          />
          <input
            className='input-style'
            type='text'
            name='quote'
            value={quote}
            placeholder='Quote'
            onChange={this.handleStateChange}
          />
          <input
            className='input-style'
            type='text'
            name='superlative'
            value={superlative}
            placeholder='Superlative'
            onChange={this.handleStateChange}
          />
          <select name='status' onChange={this.handleStateChange}>
            <option value='staff'>Staff</option>
            <option value='students'>Student</option>
          </select>
          <button onClick={this.handleSubmit}>Submit!</button>
          <input
            type='text'
            name='filter'
            placeholder='Filter Here'
            value={this.state.filter}
            onChange={this.handleStateChange}
          />
        </form>
      </>
    );
  }
}

export default FormInput;
