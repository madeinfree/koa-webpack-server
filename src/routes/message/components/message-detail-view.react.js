import React, { Component } from 'react';
import { Link } from 'react-router';

export default class MessageDetailView extends Component {
  render() {
    return (
      <div>
        <Link to="message">Message-Detail</Link>
      </div>
    );
  }
};
