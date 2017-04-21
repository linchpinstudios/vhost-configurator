import { CREATE_SITE, UPDATE_SITE, REMOVE_SITE } from '../actions/site';

export default function site(state = {}, action) {
  const domain = site.domain;

  switch (action) {
    case CREATE_SITE:
      return { ...state, domain: site };

    case UPDATE_SITE:
      return { ...state, domain: site };

    case REMOVE_SITE:
      delete site[domain];
      return { ...site };

    default:
      return state;
  }
}
