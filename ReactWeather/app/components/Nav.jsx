const React = require('react');
const {Link, IndexLink} = require('react-router');

let Nav = React.createClass({
  render() {
    return (
      <div>
        <h2>Nav component</h2>
        <IndexLink activeClassName='active' activeStyle={{fontWeight: 'bold'}} to='/'>Get Weather</IndexLink>
        <Link activeClassName='active' activeStyle={{fontWeight: 'bold'}} to='/about'>About</Link>
        <Link activeClassName='active' activeStyle={{fontWeight: 'bold'}} to='/examples'>Examples</Link>
      </div>
    );
  }
});

module.exports = Nav;