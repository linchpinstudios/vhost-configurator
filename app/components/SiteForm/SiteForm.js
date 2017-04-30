import React, { Component } from 'react';
import Styles from './SiteForm.scss';
import { Link } from 'react-router-dom';
import { TextInput, Button, DirectoryInput } from '../../dumbComponents';

import hostInterface from '../../interfaces/hostInterface';

export default class SiteForm extends Component {

  constructor() {
    super();
    this.setDefaultState();
  }

  componentDidMount() {

    let file = new hostInterface('/Applications/MAMP/conf/apache/extra/httpd-vhosts.conf');

    file.getHosts();

    file.createHostFile([
      {
        domain: 'adidas.joshdev.14four.com',
        path: '/Users/joshhagel/Sites/priestley-adidas-wanderlust/php/public',
      },{
        domain: 'linchpinstudios.dev',
        path: '/Users/joshhagel/Sites/linchpin-studios/public',
      }
    ]);

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
        <p><Link to="/">Back</Link></p>
        <form onSubmit={this.validateForm.bind(this)}>
          <TextInput label="Domain" name="domain" value={this.state.domain.value} error={this.state.domain.error} onChange={this.handleValueUpdate.bind(this)} />
          <DirectoryInput label="Directory" name="directory" path={this.state.directory.value} error={this.state.directory.error} onChange={this.handleValueUpdate.bind(this)} />
          <Button type="submit" label="Create" />
        </form>
      </div>
    );
  }

}
