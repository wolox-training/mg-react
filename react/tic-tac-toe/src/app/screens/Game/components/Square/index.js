import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
  id: PropTypes.number,
  value: PropTypes.string,
  onClick: PropTypes.func
};

export default Square;
