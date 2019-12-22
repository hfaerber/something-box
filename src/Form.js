import React, { Component } from 'react';
import './Line.css';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      character: '',
      quote: '',
    }
  }

  handleChange = (event) => {
    this.setState( {[event.target.name]: event.target.value} );
  }

  render() {
    return(
      <form className='form'>
        <input type='text' value={this.state.character} name='character'
          placeholder='Who said it?'
          onChange={event => this.handleChange(event)} />
        <input type='text' value={this.state.quote} name='quote'
          placeholder='Quote'
          onChange={event => this.handleChange(event)} />
        <button> Submit </button>
      </form>

    )
  }
}

export default Form;
