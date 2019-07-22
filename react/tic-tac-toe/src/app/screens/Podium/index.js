import React from 'react';

import Matches from './components/Matches';
import styles from './styles.module.scss';

function Podium() {
  return (
    <div className={styles.container}>
      <Matches />
    </div>
  );
}

export default Podium;
