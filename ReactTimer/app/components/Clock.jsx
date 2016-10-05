const React = require('react');

let Clock = React.createClass({
  formatSeconds(totalSeconds) {
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60);

    return minutes + ':' + seconds;
  },

  render() {
    return(
      <div>
      
      </div>
    );
  }
});