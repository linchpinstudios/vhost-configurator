import React, { Component } from 'react';
import Styles from './SiteForm.scss';
import { TextInput, Button, DirectoryInput } from '../../dumbComponents';

export default class SiteForm extends Component {

  constructor() {
    super();
    this.setDefaultState();
  }

  /////////////
  // SETTERS //
  /////////////
  setDefaultState() {
    this.state = {
      domain: {
        value: '',
        error: false,
      },
      directory: {
        value: '',
        error: false,
      },
    };
  }

  ///////////
  // FORM  //
  ///////////

  validateForm(evnt) {
    evnt.preventDefault();
    let valid = true;

    Object.keys(this.state).forEach((key) => {
      if (this.state[key].value === '') {
        valid = false;
        this.setState({
          [key]: {
            ...this.state[key],
            error: true,
          },
        });
      } else {
        this.setState({
          [key]: {
            ...this.state[key],
            error: false,
          },
        });
      }
    });

    if (valid) {
      this.submitForm();
    }
  }

  submitForm() {
    console.log('submit', this.state);
  }

  handleValueUpdate(event) {
    const key = event.target.name;
    this.setState({
      [key]: {
        value: event.target.value,
        error: false,
      },
    });
  }

  render() {
    return (
      <div className={Styles.siteFormModule}>
        <form onSubmit={this.validateForm.bind(this)}>
          <TextInput label="Domain" name="domain" value={this.state.domain.value} error={this.state.domain.error} onChange={this.handleValueUpdate.bind(this)} />
          <DirectoryInput label="Directory" name="directory" path={this.state.directory.value} error={this.state.directory.error} onChange={this.handleValueUpdate.bind(this)} />
          <Button type="submit" label="Create" />
        </form>
      </div>
    );
  }

}
