import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: []
    }
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <p>
            Rachel's Office Quote Generator.
          </p>
        </header>
        <Form />
      </main>
    );
  }
}

export default App;
