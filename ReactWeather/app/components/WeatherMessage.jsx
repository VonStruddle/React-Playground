const React = require('react');

let WeatherMessage = React.createClass({
  render() {
    let location = this.props.location;
    let temp = this.props.temp;

    return (
      <p>It's currently {temp}°C in {location}.</p>
    );
  }
});

module.exports = WeatherMessage;