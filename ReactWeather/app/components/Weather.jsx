const React = require('react');

let WeatherForm = require('WeatherForm');

let Weather = React.createClass({
  render() {
    return (
      <div>
        <h3>Weather component</h3>
        <WeatherForm/>
      </div>
    );
  }
});

module.exports = Weather;