import React, {Component} from 'react';

class WeatherSearch extends Component {
  searchWeather = (e) => {
    e.preventDefault();
    var search = this.refs.search.value
    console.log(search);
    this.props.setSearch(search)
  }
  render() {
    return(
      <form onSubmit={(e)=>this.searchWeather(e)}>
        <input
        placeholder="Search for weather"
        ref = "search"
         />
        <button type="submit">Search! </button>
      </form>
    )
  }
}

export default WeatherSearch;
