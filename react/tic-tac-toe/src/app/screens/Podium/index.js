import React, { Component } from 'react';
import Spinner from 'react-spinkit';

import getMatches from '~services/MatchesService';

import styles from './styles.module.scss';

class Podium extends Component {
  state = {
    matches: null,
    loading: true
  };

  loadMatches = async () => {
    const matches = await getMatches();
    this.setState({ loading: false, matches });
  };

  componentDidMount() {
    this.loadMatches();
  }

  render() {
    const { matches, loading } = this.state;
    return (
      <div className={styles.container}>
        {loading ? (
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

export default Podium;
