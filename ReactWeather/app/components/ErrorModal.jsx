const React = require('react');

let ErrorModal = React.createClass({
  componentDidMount() {
    let modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },

  render() {
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>Wrong city</h4>
        <p>The city you searched gave no results!</p>
        <p>
          <button className="button hollow" data-close="">
              Okay
          </button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;