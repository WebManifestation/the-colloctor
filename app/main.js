/** @jsx React.DOM */

var React = require('react'),
	ReactDOM = require('react-dom'),
	ReactApp = require('./components/ReactApp');

var mountNode = document.getElementById('app-mount');

ReactDOM.render(new ReactApp({}), mountNode);
