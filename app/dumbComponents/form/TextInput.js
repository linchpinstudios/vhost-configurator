import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Styles from './styles.scss';

export default class TextInput extends Component {

  render() {
    const name = this.props.name;
    const value = this.props.value;

    return (
      <div className={Styles.formGroup}>
        <label htmlFor={name} className={Styles.lable}>{name}</label>
        <input type="text" name={name} value={value} id={name} className={classNames({ [Styles.textInput]: true, [Styles.error]: this.props.error })} onChange={this.props.onChange} />
      </div>
    );
  }

}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  error: PropTypes.bool,
  onChange: PropTypes.func,
};

TextInput.defaultProps = {
  value: '',
  error: true,
  onChange: () => {},
};
