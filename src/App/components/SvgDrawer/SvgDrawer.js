import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './SvgDrawer.module.scss';
import { emptyMeme, store } from '../../store/store';

const SvgDrawer = (props) => {
 
  return (
    <svg className={styles.SvgDrawer} data-testid="SvgDrawer" viewBox={"0 0 " + props.img.w + " " + props.img.h}>
      <image href={`/img/` + props.img.url} x={0} y={0} />
      <text
        fontWeight={props.meme.fontWeight}
        textDecoration={props.meme.underline?'underline':'none'}
        fontStyle={props.meme.italic?'italic':'normal'}
        x={props.meme.x}
        y={props.meme.y}
        fill={props.meme.color}
        fontSize={props.meme.fontSize}>{props.meme.text}</text>
    </svg>
  );
}
SvgDrawer.propTypes={
  meme:PropTypes.object.isRequired,
  img:PropTypes.object.isRequired
}
export default SvgDrawer;
