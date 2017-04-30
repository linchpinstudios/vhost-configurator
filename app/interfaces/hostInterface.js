'use strict'

import { remote } from 'electron';
import fs from 'fs';
import vhostTemplate from '../templates/vhost.confi.js';

export default class hostInterface {

  constructor( vHostPath = '' ) {
    let app = remote.app;
    this.path = app.getPath('userData');
    this._vHostPath = vHostPath;
  }

  /////////////
  // GETTERS //
  /////////////


  /////////////
  // SETTERS //
  /////////////
  set vhostPath( value ) {
    this._vHostPath = value;
  }


  ///////////
  // HOSTS //
  ///////////

  getHosts() {
    fs.readFile(this._vHostPath, 'utf8', this.handleHostFile.bind(this));
  }

  processHostFile( data ) {
    let sites = [];
    let hosts = data.match( /<VirtualHost \*:[0-9]*>([\s\S]*?)<\/VirtualHost>/gm );

    hosts.forEach( (host) => {
      sites.push( this.processHost(host) );
    });

    // let regex = new RegExp('<VirtualHost \*:[0-9]*>(.*?)<\/VirtualHost>/g');

    console.log( sites );

  }

  processHost( host ) {
    let data = {};
    data.domain = this.getDomain( host );
    data.path = this.getPath( host );

    return data;
  }

  getDomain( host ) {
    let regex = /ServerName (.*)/g;
    return regex.exec(host)[1];
  }

  getPath( host ) {
    let regex = /DocumentRoot "(.*)"/g;
    return regex.exec(host)[1];
  }

  /////////////////
  // CREATE HOST //
  /////////////////

  createHostFile( hosts ) {
    let hostText = [];

    hosts.forEach( ( host ) => {
      let hostTemp = this.createHostText( host );
      hostText.push( hostTemp );
    });

    this.writeHostFile( hostText.join('') );
  }

  createHostText( host ) {

    return `

    <VirtualHost *:80>
      ServerName ${host.domain}
      DocumentRoot "${host.path}"
    </VirtualHost>
    `;

  }

  writeHostFile( hosts ) {
    let body = vhostTemplate.replace('{{Hosts}}', hosts);

    fs.writeFile(this._vHostPath, body, (err) => {
      if (err) this.handleError(err);
    });
  }

  //////////////
  // HANDLERS //
  //////////////

  handleHostFile(err, data) {

    if (err) this.handleError(err);

    this.processHostFile( data );

  }

  handleError(err) {
    throw err;
  }

}
