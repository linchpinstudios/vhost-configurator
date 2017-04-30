import hostInterface from '../interfaces/hostInterface';

export const ADD_SITE = 'ADD_SITE';
export const CREATE_SITE = 'CREATE_SITE';
export const UPDATE_SITE = 'UPDATE_SITE';
export const REMOVE_SITE = 'REMOVE_SITE';

export function add( sites = [] ) {
  return {
    type: ADD_SITE,
    sites
  };
}

export function create(site = {}) {
  return {
    type: CREATE_SITE,
    site,
  };
}

export function update(site = {}) {
  return {
    type: UPDATE_SITE,
    site,
  };
}

export function remvoe(site = {}) {
  return {
    type: REMOVE_SITE,
    site,
  };
}

export function getHosts( hosts = [] ) {
  let vHosts = new hostInterface('/Applications/MAMP/conf/apache/extra/httpd-vhosts.conf');

  return (dispatch: () => void) => {
    let hosts = vHosts.getHosts();
    dispatch( add(hosts) );
  };
}
