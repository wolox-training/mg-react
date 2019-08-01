import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bool, func, arrayOf, string, shape, number } from 'prop-types';

import { PLAYER_ONE, PLAYER_TWO } from '~constants/';

import matchesActions from '~redux/matches/actions';

import Layout from './layout';

class Podium extends Component {
  componentDidMount() {
    const { getMatches } = this.props;
    getMatches();
  }

  render() {
    const { matches, onLoading } = this.props;
    return <Layout matches={matches} onLoading={onLoading} />;
  }
}

Podium.propTypes = {
  getMatches: func,
  matches: arrayOf(
    shape({
      [PLAYER_ONE]: string,
      [PLAYER_TWO]: string,
      winner: string,
      createdAt: string,
      id: number
    })
  ),
  onLoading: bool
};

const mapStateToProps = store => ({
  matches: store.matches.matches,
  onLoading: store.matches.matchesLoading
});

const mapDispatchToProps = dispatch => ({
  getMatches: () => dispatch(matchesActions.matches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Podium);
