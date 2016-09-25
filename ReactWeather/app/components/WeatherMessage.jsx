const React = require('react');

let WeatherMessage = React.createClass({
  render() {
    return (
      <p>It's currently 18°C in Bordeaux.</p>
    );
  }
});

module.exports = WeatherMessage;