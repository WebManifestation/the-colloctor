/** @jsx React.DOM */

var React = require('react'),
	MoreApp = require('./MoreApp');

var ReactApp = React.createClass({

      render: function () {
        return (
          <div id="app">

             <p>Test component</p>

             <MoreApp />

          </div>
        )
      }
  });

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;