let GreeterMessage = React.createClass({
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <p>This is from React.</p>
      </div>
    );
  }
});

let GreeterForm = React.createClass({
  render() {
    return (
      <div>
        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
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
      name: this.props.name
    };
  },

  onButtonClick(e) {
    e.preventDefault();

    let nameRef = this.refs.name;
    let name = nameRef.value;
    nameRef.value = '';

    if (typeof name === 'string' && name.length > 0) {
      this.setState({
        name: name
      });
    }
  },

	render() {
    let name = this.state.name;
    let message = this.props.message;

		return (
			<div>
				<h1>Hello {name}!</h1>
				<p>{message}</p>

        <GreeterMessage/>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
        
        <GreeterForm/>
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