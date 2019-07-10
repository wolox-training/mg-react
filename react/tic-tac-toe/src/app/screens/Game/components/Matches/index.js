import React, { Component, Fragment } from 'react';
import Spinner from 'react-spinkit';

import getMatches from '../../../../../services/MatchesService';

class Matches extends Component {
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
      <Fragment>
        {loading ? (
          <Spinner name="ball-scale-ripple" color="green" />
        ) : (
          <ul>
            <Fragment>
              <span role="img" aria-label="coup">
                🏆
              </span>
              <h1>Podium</h1>
              <span role="img" aria-label="coup">
                🏆
              </span>
            </Fragment>
            {matches.map(({ createdAt, player_one: playerOne, player_two: playerTwo, winner }) => (
              <li key={createdAt}>
                {playerOne} v {playerTwo}: {winner}
              </li>
            ))}
          </ul>
        )}
      </Fragment>
    );
  }
}

export default Matches;
