var Greeter = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Hello from React!</h1>
				<p>My first JS framework :D</p>
			</div>
		);
	}
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);