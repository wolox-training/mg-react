import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import { func, bool, arrayOf, string, shape, number } from 'prop-types';

import { PLAYER_ONE, PLAYER_TWO } from '~constants/';

import matchesActions from '~redux/matches/actions';

import styles from './styles.module.scss';

class Podium extends Component {
  componentDidMount() {
    const { getMatches } = this.props;
    getMatches();
  }

  render() {
    const { matches, loading } = this.props;
    return (
      <div className={styles.container}>
        {loading && !matches ? (
          <Spinner name="ball-scale-ripple" color="green" />
        ) : (
          <ul className={styles.matches}>
            <li>
              <span role="img" aria-label="coup">
                🏆
              </span>
              <h1>Podium</h1>
              <span role="img" aria-label="coup">
                🏆
              </span>
            </li>
            {matches.map(({ createdAt, player_one: playerOne, player_two: playerTwo, winner }) => (
              <li key={createdAt}>
                {playerOne} v {playerTwo}: {winner}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

Podium.propTypes = {
  getMatches: func,
  loading: bool,
  matches: arrayOf(
    shape({
      [PLAYER_ONE]: string,
      [PLAYER_TWO]: string,
      winner: string,
      createdAt: string,
      id: number
    })
  )
};

const mapStateToProps = store => ({
  matches: store.matches.matches,
  loading: store.matches.matchesLoading
});

const mapDispatchToProps = dispatch => ({
  getMatches: () => dispatch(matchesActions.matches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Podium);
