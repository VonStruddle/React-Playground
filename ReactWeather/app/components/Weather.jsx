const React = require('react');

let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');

let Weather = React.createClass({
  getInitialState() {
    return {
      location: 'Bordeaux',
      temp: 19
    }
  },

  handleSearch(location) {
    this.setState({
      location: location,
      temp: 22
    });
  },

  render() {
    let location = this.state.location;
    let temp = this.state.temp;

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