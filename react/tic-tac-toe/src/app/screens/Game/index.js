import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, bool, string, arrayOf, number } from 'prop-types';

import GameActions from '~redux/game/actions';

import { calculateWinner } from '~utils/GeneralUtils';

import { PLAYER_ONE, PLAYER_TWO } from '~constants/';

import Board from './components/Board';
import Moves from './components/Moves';
import styles from './styles.module.scss';

class Game extends Component {
  handleClick = id => {
    const { onClick, history, stepNumber, xIsNext } = this.props;
    onClick(id, history, stepNumber, xIsNext);
  };

  handleMove = move => {
    const { onMove } = this.props;
    onMove(move);
  };

  postToPodium = winner => {
    const { postWinner } = this.props;
    postWinner({
      [PLAYER_ONE]: 'X',
      [PLAYER_TWO]: 'O',
      winner
    });
  };

  render() {
    const { history, stepNumber, xIsNext } = this.props;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
    let status = null;
    const moves = history.map((step, move) => {
      const desc = move > 0 ? `Go to move # ${move}` : 'Go to game start';
      const moveKey = move + 10;
      return (
        <li key={moveKey}>
          <Moves desc={desc} onClick={this.handleMove} move={move} />
        </li>
      );
    });

    if (winner) {
      status = `Winner: ${winner}`;
      this.postToPodium(winner);
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board squares={current.squares} onClick={this.handleClick} />
        </div>
        <div className={styles.gameInfo}>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  onClick: func.isRequired,
  onMove: func.isRequired,
  history: arrayOf(string),
  postWinner: func,
  stepNumber: number,
  xIsNext: bool
};

const mapStateToProps = store => ({
  history: store.game.history,
  xIsNext: store.game.xIsNext,
  stepNumber: store.game.stepNumber
});

const mapDispatchToProps = dispatch => ({
  postWinner: values => dispatch(GameActions.winner(values)),
  onClick: (id, history, stepNumber, xIsNext) =>
    dispatch(GameActions.onClick(id, history, stepNumber, xIsNext))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
