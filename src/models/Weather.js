import axios from 'axios';

function WeatherModel(){}

WeatherModel.all = function(state, city) {
  var request = axios.get(`http://api.wunderground.com/api/eb765427364f5663/conditions/q/${state}/${city}.json`)
  return request
}

export default WeatherModel
