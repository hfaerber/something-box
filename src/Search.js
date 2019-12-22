import React, {Component} from 'react';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  handleChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  handleClick = () => {
    console.log('clicked', 'clicked search btn');
    this.props.handleSearch(this.state.query)

  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render() {
    const buttonStatus = this.props.isSearchDisplay ? 'show' : 'hide';
    return(
      <div>
        <div className='searchHeader'>
          <h1>{this.props.isSearchDisplay ? `That's What *${this.state.query}* Said` : 'That\'s What She Said'}</h1>
          <button className={buttonStatus}>Back To All Results</button>
        </div>
        <div className='searchInputs'>
          <input type="text" name='query' placeholder='Search Quote by Character'
            value={this.state.query} onChange={event => this.handleChange(event)} />
          <button type='button' onClick={this.handleClick}>Search</button>
        </div>
      </div>
    )
  }

}

export default Search;
