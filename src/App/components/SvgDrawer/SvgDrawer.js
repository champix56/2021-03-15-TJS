import React from 'react';
import PropTypes from 'prop-types';
import styles from './SvgDrawer.module.scss';

const SvgDrawer = (props) => {
  const img={};
  const meme={}
  return (
  <svg className={styles.SvgDrawer} data-testid="SvgDrawer" viewBox={"0 0 "+img.w+" "+img.h}>
    <image href={`img/`+img.url} x={0} y={0}/>
    <text
      x={meme.x}
      y={meme.y}
      fill={meme.color}
      fontSize={meme.fontSize}>{meme.text}</text>
  </svg>
);
}

export default SvgDrawer;
