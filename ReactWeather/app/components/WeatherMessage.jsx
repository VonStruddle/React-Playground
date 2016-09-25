const React = require('react');

let WeatherMessage = React.createClass({
  render() {
    let {location, temp} = this.props;

    return (
      <p>It's currently {temp}°C in {location}.</p>
    );
  }
});

module.exports = WeatherMessage;