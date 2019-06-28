import React, { Component } from 'react';
import { number, string, func } from 'prop-types';

import styles from './styles.module.scss';

class Square extends Component {
  handleClick = () => {
    const { onClick, id } = this.props;
    onClick(id);
  };

  render() {
    const { value } = this.props;
    return (
      <button type="button" className={styles.square} onClick={this.handleClick}>
        {value}
      </button>
    );
  }
}

Square.propTypes = {
  id: number,
  value: string,
  onClick: func
};

export default Square;
