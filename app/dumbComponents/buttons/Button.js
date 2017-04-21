import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styles from './styles.scss';

export default class Button extends Component {

  render() {
    return (
      <button className={Styles.button} type={this.props.type}>{this.props.label}</button>
    );
  }

}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
