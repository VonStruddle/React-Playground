const React = require('react');

let WeatherForm = React.createClass({
  render() {
    return (
      <form onSubmit='#'>
        <input type='text' ref='#'/>
        <button>Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;