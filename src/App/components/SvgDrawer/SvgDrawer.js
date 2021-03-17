import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './SvgDrawer.module.scss';
import { emptyMeme, store } from '../../store/store';

const SvgDrawer = () => {
  const [meme, setmeme] = useState(emptyMeme);
  const [img, setimg] = useState({ w: 0, h: 0 });

  useEffect(() => {
    store.subscribe(()=>{
      setmeme(store.getState().currentMeme);
      const image=store.getState().images.find(e=>String(store.getState().currentMeme.imageId)===String(e.id))
      //envoie d'une image vide uniquement si 
      setimg(image?image:{w:0,h:0});
    })
  }, []);
  return (
    <svg className={styles.SvgDrawer} data-testid="SvgDrawer" viewBox={"0 0 " + img.w + " " + img.h}>
      <image href={`img/` + img.url} x={0} y={0} />
      <text
        x={meme.x}
        y={meme.y}
        fill={meme.color}
        fontSize={meme.fontSize}>{meme.text}</text>
    </svg>
  );
}

export default SvgDrawer;
