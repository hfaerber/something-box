import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import DisplayContainer from './DisplayContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentEpisode: 0,
      quotes: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    fetch(' https://the-office-api.herokuapp.com/season/1/episode/1')
      .then(res => res.json())
      .then(data => {
        this.setInitialState(data);
      })
  }

  setInitialState = (data) => {
    this.setState( { quotes: data.data.quotes, currentEpisode: data.data.episode, isLoading: false })
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
        { !this.state.isLoading && <DisplayContainer
          quotes={this.state.quotes}
          currentEpisode={this.state.currentEpisode}
        />}
      </main>
    );
  }
}

export default App;
