// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import site from './site';

const rootReducer = combineReducers({
  counter,
  site,
  router,
});

export default rootReducer;
