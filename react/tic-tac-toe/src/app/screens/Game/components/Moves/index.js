import React, { Component } from 'react';
import { func, number, string } from 'prop-types';

class Moves extends Component {
  handleClick = () => {
    const { onClick, move } = this.props;
    onClick(move);
  };

  render() {
    const { desc } = this.props;
    return (
      <button type="button" onClick={this.handleClick}>
        {desc}
      </button>
    );
  }
}

Moves.propTypes = {
  onClick: func.isRequired,
  desc: string,
  move: number
};

export default Moves;
