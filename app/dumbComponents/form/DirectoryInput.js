import React, { Component } from 'react';
import { remote } from 'electron';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Styles from './styles.scss';

export default class DirectoryInput extends Component {

  prompDirectory() {
    const path = remote.dialog.showOpenDialog({
      properties: ['openDirectory']
    });
    this.props.onChange({ target: { name: this.props.name, value: path[0] } });
  }

  render() {
    const name = this.props.name;

    return (
      <div className={Styles.formGroup}>
        <label htmlFor={name} className={Styles.lable}>{name}</label>
        <p>{this.props.path}</p>
        <a href="#donothing" onClick={this.prompDirectory.bind(this)} className={classNames({ [Styles.selectButton]: true, [Styles.error]: this.props.error })}>Select Directory</a>
      </div>
    );
  }

}

DirectoryInput.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string,
  onChange: PropTypes.func,
};

DirectoryInput.defaultProps = {
  path: '',
  onChange: () => {},
};
