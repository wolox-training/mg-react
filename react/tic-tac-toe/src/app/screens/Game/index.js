import React, { Component } from 'react';

import MatchesService from '~services/MatchesService';

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

  calculateWinner = squares => {
    const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  handleClick = id => {
    const { history, stepNumber, xIsNext } = this.state;
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[historyPoint.length - 1];
    const squares = current.squares.slice();

    if (this.calculateWinner(squares) || squares[id]) {
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

  postToPodium = winner =>
    MatchesService.postMatch({
      [PLAYER_ONE]: 'X',
      [PLAYER_TWO]: 'O',
      winner
    });

  render() {
    const { history, stepNumber, xIsNext } = this.state;
    const current = history[stepNumber];
    const winner = this.calculateWinner(current.squares);
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

export default Game;
