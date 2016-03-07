import React, { Component } from 'react';

export default class HTML extends Component {
  render() {
    return (
      <html>
        <head>
          <title></title>
        </head>
        <body>
          <div id='app'></div>
          <script src="bundle.js" charset="utf-8"></script>
        </body>
      </html>
    );
  }
};
