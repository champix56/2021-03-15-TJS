import React from 'react';
import PropTypes from 'prop-types';
import styles from './SvgDrawer.module.scss';

const SvgDrawer = (props) => {
  const img=props.images.find(elem=>String(elem.id)===String(props.meme.imageId));
  return (
  <svg className={styles.SvgDrawer} data-testid="SvgDrawer" viewBox={"0 0 "+img.w+" "+img.h}>
    <image href={`img/`+img.url} x={0} y={0}/>
    <text
      x={props.meme.x}
      y={props.meme.y}
      fill={props.meme.color}
      fontSize={props.meme.fontSize}>{props.meme.text}</text>
  </svg>
);
}
SvgDrawer.propTypes = { meme: PropTypes.object.isRequired };

export default SvgDrawer;
