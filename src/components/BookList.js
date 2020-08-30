import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{ background: theme.ui, color: theme.syntax }}
      >
        <ul>
          <li>the way of kinds</li>
          <li>the name of the kings</li>
          <li>Harry Potter</li>
        </ul>
      </div>
    );
  }
}
