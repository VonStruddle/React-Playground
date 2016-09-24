let React = require('react');
let ReactDOM = require('react-dom');
let GreeterForm = require('./components/GreeterForm');
let GreeterMessage = require('./components/GreeterMessage');

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

let name = 'Quentin';
let message = 'Welcome to React, the best JS library.';

ReactDOM.render(
  <Greeter name={name} message={message}/>,
  document.getElementById('app')
);