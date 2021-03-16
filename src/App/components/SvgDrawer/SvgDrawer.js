import React from 'react';
import PropTypes from 'prop-types';
import styles from './SvgDrawer.module.scss';

const SvgDrawer = (props) => (
  <svg className={styles.SvgDrawer} data-testid="SvgDrawer" viewBox="0 0 60 80">
    <rect x={10} y={20} width={40} height={40} fill="blue" />
    <cirle cx={10} cy={20} r={10} style={{fill:'yellow'}} />
    <text x={10} y={10} stroke="tomato"  fontSize={10}>{props.meme.text}</text>
  </svg>
);

SvgDrawer.propTypes = { meme: PropTypes.object.isRequired };

export default SvgDrawer;
