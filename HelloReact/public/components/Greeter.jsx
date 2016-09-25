let React = require('react');
let GreeterForm = require('GreeterForm');
let GreeterMessage = require('GreeterMessage');

let Greeter = React.createClass({
	getDefaultProps() {
	  return {
	  	name: 'You',
	  	message: 'Welcome to React.'
	  };
	},

  getInitialState() {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },

  handleNewText(name, message) {
    if (name && message) {
      this.setState({
        name: name,
        message: message
      });
    } else if (name) {
      this.setState({
        name: name
      });
    } else if (message) {
      this.setState({
        message: message
      });
    }
  },

	render() {
    let name = this.state.name;
    let message = this.state.message;

		return (
			<div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewText={this.handleNewText}/>
			</div>
		);
	}
});

module.exports = Greeter;