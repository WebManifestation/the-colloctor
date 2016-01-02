/** @jsx React.DOM */

var React = require('react');

var ReactApp = React.createClass({

      render: function () {
        return (
          <div id="app">

             <p>Test component</p>

          </div>
        )
      }
  });

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;