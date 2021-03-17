import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViever.module.scss';
import SvgDrawer from '../SvgDrawer/SvgDrawer';

const MemeViever = (props) => (
  <div className={styles.MemeViever} data-testid="MemeViever">
  <SvgDrawer />
    {JSON.stringify(props)}
  </div>
);

export default MemeViever;
