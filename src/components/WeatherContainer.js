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
setSearch = (state, city) => {
  this.setState({
    state: state
  })
}
getWeather = (state, city) => {
  WeatherModel.all(state, city).then((res)=> {
    var temp = res.data.current_observation.temp_f
    var weather = res.data.current_observation.weather
    var icon = res.data.current_observation.icon_url
    var humidity = res.data.current_observation.relative_humidity
    this.setState({
      temp: temp + "f",
      weather: "The weather is " + weather,
      icon: icon,
      humidity: "Humidity is " + humidity
    })
    console.log(this.state.temp)
  })
}

  render(){
    return (
      <div className="WeatherContainer">
      <h1> Enter in a city and state below. </h1>
      <img src={this.state.icon} />
      <p> {this.state.weather} </p>
      <p> {this.state.temp}</p>
      <p> {this.state.humidity} </p>
      <WeatherSearch
      setSearch = {this.setSearch}
      getWeather = {this.getWeather} />
      </div>
    )
  }
}

export default WeatherContainer;
