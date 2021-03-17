import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './SvgDrawer.module.scss';
import { emptyMeme, store } from '../../store/store';

const SvgDrawer = (props) => {
 const border=(props.meme.frameSizeX>0 || props.meme.frameSizeY >0)?'1px solid black':'none';
  return (
    <svg className={styles.SvgDrawer} style={{border:border}} data-testid="SvgDrawer" viewBox={(- props.meme.frameSizeX)+" "+(- props.meme.frameSizeY)+" " + (props.img.w +(props.meme.frameSizeX * 2) ) + " " + (props.img.h +(props.meme.frameSizeY * 2))}>
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
