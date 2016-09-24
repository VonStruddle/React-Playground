let React = require('react');

let GreeterForm = React.createClass({
  onFormSubmit(e) {
    e.preventDefault();

    let name = this.refs.name.value;
    let message = this.refs.message.value;

    if (name.length > 0 || message.length > 0) {
      this.refs.name.value = '';
      this.refs.message.value = '';
      this.props.onNewText(name, message);
    }
  },

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" ref="name"/>
          </div>
          <div>
            <input type="textarea" ref="message"/>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
});

module.exports = GreeterForm;