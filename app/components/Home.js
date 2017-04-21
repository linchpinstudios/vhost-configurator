// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>VHosts</h2>
          <p><Link to="/counter">to Counter</Link></p>
          <p><Link to="/sites/create">Create Site</Link></p>
        </div>
      </div>
    );
  }
}
