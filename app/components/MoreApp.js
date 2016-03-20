/** @jsx React.DOM */

var React = require('react');

var MoreApp = React.createClass({

      render: function () {
        return (
          <div id="app">

             <p>A sepreat component</p>

          </div>
        )
      }
  });

/* Module.exports instead of normal dom mounting */
module.exports = MoreApp;