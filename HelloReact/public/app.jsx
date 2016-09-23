let GreeterMessage = React.createClass({
  render() {
    let name = this.props.name;
    let message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

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
          <input type="text" ref="name"/>
          <input type="textarea" ref="message"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

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