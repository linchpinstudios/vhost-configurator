import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as SiteActions from '../actions/site';

function mapStateToProps(state) {
  return {
    site: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SiteActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
