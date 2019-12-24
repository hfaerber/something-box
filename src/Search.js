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
        <label htmlFor="season-select">Choose a season:</label>

        <select name="season" value={this.state.season} id="season-select"
          onChange={event => this.handleSeason(event)}>
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


// use drop down menu or images instead of type-in search
//
// <div>
//   <img src='' name="Michael:" className='image'/>
//   <img src='' name="Dwight:" className='image'/>
//   <img src='' name="Jim:" className='image'/>
//   <img src='' name="Pam:" className='image'/>
//   <img src='' name="Phyllis:" className='image'/>
//   <img src='' name="Creed:" className='image'/>
//   <img src='' name="Angela:" className='image'/>
//   <img src='' name="Kevin:" className='image'/>
//   <img src='' name="Meredith:" className='image'/>
//   <img src='' name="Tobuy:" className='image'/>
//   <img src='' name="Oscar:" className='image'/>
//   <img src='' name="Oscar:" className='image'/>
//   <img src='' name="Oscar:" className='image'/>
//
//
//
// </div>
