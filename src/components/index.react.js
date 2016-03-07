import React, { Component } from 'react';
import { Link } from 'react-router';

export default class IndexComponent extends Component {
  render() {
    return (
      <div>
        <Link to="about">About</Link>
      </div>
    );
  }
};
