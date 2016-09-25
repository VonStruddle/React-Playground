const React = require('react');

let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');

let Weather = React.createClass({
  handleSearch(location) {
    alert(location);
  },

  render() {
    return (
      <div>
        <h3>Weather component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage/>
      </div>
    );
  }
});

module.exports = Weather;