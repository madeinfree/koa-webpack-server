import React, { Component } from 'react';
import { Link } from 'react-router';

export default class MessageComponent extends Component {
  render() {
    return (
      <div>
        <Link to="/message/1">Message</Link>
      </div>
    );
  }
};
