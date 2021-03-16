import React from 'react';
import PropTypes from 'prop-types';
import styles from './Titre1.module.scss';

const Titre1 = (props) => (
  <div className={styles.Titre1} data-testid="Titre1">
    <span className={styles.meme}>Meme</span>.<span className={styles.js}>js</span>
  </div>
);

export default Titre1;
