import React, { Component } from 'react';
import WeatherContainer from './components/WeatherContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Weather App! </h1>
        <WeatherContainer />
      </div>
    );
  }
}

export default App;
