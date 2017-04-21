export const CREATE_SITE = 'CREATE_SITE';
export const UPDATE_SITE = 'UPDATE_SITE';
export const REMOVE_SITE = 'REMOVE_SITE';

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
