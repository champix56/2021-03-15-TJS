import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViever.module.scss';

const MemeViever = (props) => (
  <div className={styles.MemeViever} data-testid="MemeViever">
    {JSON.stringify(props)}
  </div>
);

MemeViever.propTypes = {
  meme:PropTypes.object.isRequired
};

export default MemeViever;
