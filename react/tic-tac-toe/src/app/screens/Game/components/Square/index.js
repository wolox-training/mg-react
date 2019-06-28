import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

class Square extends Component {
  state = {
    value: null
  };

  handleClick = () => {
    this.setState({ value: 'X' });
  };

  render() {
    return (
      <button key={this.props.id} type="button" className={styles.square} onClick={this.handleClick}>
        {this.state.value}
      </button>
    );
  }
}

Square.handleClick = () => {
  this.setState({ value: 'X' });
};

Square.propTypes = {
  id: PropTypes.number
};

export default Square;
