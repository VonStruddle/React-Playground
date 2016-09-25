const React = require('react');

let WeatherMessage = ({temp, location}) => <p>It's currently {temp}°C in {location}.</p>;

module.exports = WeatherMessage;