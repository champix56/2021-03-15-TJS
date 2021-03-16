import React from 'react';
import PropTypes from 'prop-types';
import styles from './AppCore.module.scss';

const AppCore = () => (
  <div className={styles.AppCore} data-testid="AppCore">
    AppCore Component
  </div>
);

AppCore.propTypes = {};

AppCore.defaultProps = {};

export default AppCore;
