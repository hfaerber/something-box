import React, {Component} from 'react';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      season: 1
    }
  }

  handleChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  handleSeason = event => {
    this.setState( { season: event.target.value } );
  }

  handleGoButton = () => {
    console.log('go button', this.state.season);
    this.props.setStateBySeason(this.state.season);
  }

  handleClick = () => {
    console.log('clicked', 'clicked search btn');
    this.props.handleSearch(this.state.query)
  }

  handleAllResults = () => {
    this.clearQuery();
    this.props.handleSearch('')
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render() {
    const buttonStatus = this.props.isSearchDisplay ? 'show' : 'hide';
    return(
      <div>
        <label htmlFor="season-select" className="label-dropdown" >Choose a season:</label>
        <select name="season" value={this.state.season} id="season-select"
          onChange={event => this.handleSeason(event)} className="dropdown">
            <option value="">--Please choose a season--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
        </select>
        <button className='season-button' onClick={this.handleGoButton}>Go!</button>
        <div className='searchHeader'>
          <h1>{this.props.isSearchDisplay ? `That's What *${this.state.query}* Said` : 'That\'s What She Said'}</h1>
          <button className={buttonStatus} onClick={this.handleAllResults}>Back To All Results</button>
        </div>
        <div className='searchInputs'>
          <input className='search-input' type="text" name='query' placeholder='Search Quote by Character'
            value={this.state.query} onChange={event => this.handleChange(event)} />
          <button className='search-button' type='button' onClick={this.handleClick}>Search</button>
        </div>
      </div>
    )
  }

}

export default Search;
