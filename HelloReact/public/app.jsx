let React = require('react');
let ReactDOM = require('react-dom');
let Greeter = require('Greeter');

let name = 'Quentin';
let message = 'Welcome to React, the best JS library.';

ReactDOM.render(
  <Greeter name={name} message={message}/>,
  document.getElementById('app')
);