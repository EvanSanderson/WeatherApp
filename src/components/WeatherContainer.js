import React, {Component} from 'react';
import WeatherSearch from './WeatherSearch';

class WeatherContainer extends Component {
setSearch = (search) => {
  console.log(search + "in wc")
}
  render(){
    return (
      <div>
      <h1> Hello there! </h1>
      <WeatherSearch
      setSearch = {this.setSearch} />
      </div>
    )
  }
}

export default WeatherContainer;
