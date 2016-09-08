import React, {Component} from 'react';

class WeatherSearch extends Component {
  searchWeather = (e) => {
    e.preventDefault();
    var city = this.refs.city.value
    var state = this.refs.state.value
    console.log(city + state);
    this.props.setSearch(state, city)
    this.props.getWeather(state, city)
  }

  render() {
    return(
      <form onSubmit={(e)=>this.searchWeather(e)}>
        <input
        placeholder="Search for city"
        ref = "city"
         />
         <input
         placeholder="Search for state (by acronmym)"
         ref = "state"
          />
        <button type="submit">Search! </button>
      </form>
    )
  }
}

export default WeatherSearch;
