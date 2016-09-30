const React = require('react');
const {Link, IndexLink} = require('react-router');

let Nav = (props) => {
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li>
              <IndexLink activeClassName="active" to="/">Timer</IndexLink>
            </li>
            <li>
              <Link activeClassName="active" to="/countdown">Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>
              App created by <a href="http://quentindurantay.me/" target="_blank">Quentin Durantay</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

module.exports = Nav;