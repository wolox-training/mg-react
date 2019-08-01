import React from 'react';
import { arrayOf, string, shape, number } from 'prop-types';

import styles from './styles.module.scss';

import whileLoading from '~components/hocs';

import { PLAYER_ONE, PLAYER_TWO } from '~constants/';

function PodiumLayout({ matches }) {
  return (
    <div className={styles.container}>
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
    </div>
  );
}

PodiumLayout.propTypes = {
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
export default whileLoading(PodiumLayout);
