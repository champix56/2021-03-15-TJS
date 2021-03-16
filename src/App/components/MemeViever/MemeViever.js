import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViever.module.scss';

const MemeViever = () => (
  <div className={styles.MemeViever} data-testid="MemeViever">
    MemeViever Component
  </div>
);

MemeViever.propTypes = {};

MemeViever.defaultProps = {};

export default MemeViever;
