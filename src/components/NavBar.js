import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <h1>Read-it-later App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}
