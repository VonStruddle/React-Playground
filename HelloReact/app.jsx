var Greeter = React.createClass({
	getDefaultProps: function() {
	    return {
	    	name: 'You',
	    	message: 'Welcome to React.'      
	    };
	},

	render: function() {
		return (
			<div>
				<h1>Hello {name}!</h1>
				<p>{message}</p>
			</div>
		);
	}
});

var name = 'Quentin';
var message = 'Welcome to React, the best JS library.';

ReactDOM.render(
  <Greeter name={name} message={message}/>,
  document.getElementById('app')
);