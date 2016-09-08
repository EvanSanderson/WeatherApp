import React, {Component} from 'react';
import WeatherSearch from './WeatherSearch';
import WeatherModel from '../models/Weather';

class WeatherContainer extends Component {
constructor(){
  super();
  this.state = {
    search: []
  }
}
setSearch = (search) => {
  this.setState({
    search: search
  })
}
  render(){
    WeatherModel.all(this.state.search).then((res)=> {
      var temp = res.data.current_observation.temp_f
      console.log(temp)
    })
    return (
      <div>
      <h1> Weather App! </h1>
      <p> {this.state.search} </p>
      <p> {this.state.temp} </p>
      <WeatherSearch
      setSearch = {this.setSearch} />
      </div>
    )
  }
}

export default WeatherContainer;
