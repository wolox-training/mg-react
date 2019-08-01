import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import GameActions from '~redux/game/actions';

import { calculateWinner } from '~utils/GeneralUtils';

import { PLAYER_ONE, PLAYER_TWO } from '~constants/';

import Board from './components/Board';
import Moves from './components/Moves';
import styles from './styles.module.scss';

class Game extends Component {
  state = {
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    xIsNext: true,
    stepNumber: 0
  };

  handleClick = id => {
    const { history, stepNumber, xIsNext } = this.state;
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[historyPoint.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[id]) {
      return;
    }
    squares[id] = xIsNext ? 'X' : 'O';
    this.setState({
      history: historyPoint.concat([{ squares }]),
      xIsNext: !xIsNext,
      stepNumber: historyPoint.length
    });
  };

  handleMove = move => this.setState({ stepNumber: move, xIsNext: move % 2 === 0 });

  postToPodium = winner => {
    const { postWinner } = this.props;
    postWinner({
      [PLAYER_ONE]: 'X',
      [PLAYER_TWO]: 'O',
      winner
    });
  };

  render() {
    const { history, stepNumber, xIsNext } = this.state;
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
  postWinner: func
};

const mapDispatchToProps = dispatch => ({
  postWinner: values => dispatch(GameActions.winner(values))
});

export default connect(
  null,
  mapDispatchToProps
)(Game);
