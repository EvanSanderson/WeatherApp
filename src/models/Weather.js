import axios from 'axios';

function WeatherModel(){}

WeatherModel.all = function(search) {
  var request = axios.get(`http://api.wunderground.com/api/eb765427364f5663/conditions/q/CA/${search}.json`)
  return request
}

export default WeatherModel
