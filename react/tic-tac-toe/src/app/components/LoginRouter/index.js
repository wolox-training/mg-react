import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { shape, func } from 'prop-types';

import Game from '../../screens/Game';
import actionsCreator from '../../../redux/login/actions';

import AuthInfo from './components/AuthInfo';
import AuthRoute from './components/AuthRoute';

class LoginRouter extends Component {
  handleSubmit = values => {
    const { login } = this.props;
    login(values);
  };

  handleClick = () => {
    const { logout } = this.props;
    logout();
  };

  render() {
    const { islogged } = this.props;
    return (
      <Router>
        <Fragment>
          {islogged && <AuthInfo islogged={islogged} onClick={this.handleClick} />}
          <Switch>
            <AuthRoute component={Game} onSubmit={this.handleSubmit} islogged={islogged} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

LoginRouter.propTypes = {
  login: func.isRequired,
  logout: func.isRequired,
  islogged: shape({})
};

const mapStateToProps = store => ({
  islogged: store.login.islogged
});

const mapDispatchToProps = dispatch => ({
  login: values => dispatch(actionsCreator.login(values)),
  logout: () => dispatch(actionsCreator.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginRouter);
