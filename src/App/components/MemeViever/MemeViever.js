import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViever.module.scss';
import SvgDrawer from '../SvgDrawer/SvgDrawer';

const MemeViever = (props) => (
  <div className={styles.MemeViever} data-testid="MemeViever">
  <SvgDrawer meme={props.meme} images={props.images}/>
    {JSON.stringify(props)}
  </div>
);

MemeViever.propTypes = {
  meme:PropTypes.object.isRequired
};

export default MemeViever;
