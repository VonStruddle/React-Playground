const React = require('react');

let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let openWeatherMap = require('openWeatherMap');

let Weather = React.createClass({
  getInitialState() {
    return {
      location: 'Bordeaux',
      temp: 19
    }
  },

  handleSearch(location) {
    let that = this;

    openWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp
      });
    }, function(errorMessage) {
      alert(errorMessage);
    });
  },

  render() {
    let {location, temp} = this.state;

    return (
      <div>
        <h3>Weather component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage location={location} temp={temp}/>
      </div>
    );
  }
});

module.exports = Weather;