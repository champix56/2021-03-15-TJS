import React,{useEffect,useState} from 'react';
import styles from './SvgDrawer.module.scss';
import {store} from '../../store/reducer';
const SvgDrawer = (props) => {
  const [meme, setmeme] = useState({});
  const [img, setimg] = useState({});
useEffect(() => {
  store.subscribe(()=>{
      setmeme(store.getState().currentMeme?store.getState().currentMeme:{});
      if(undefined===store.getState().currentMeme){setmeme({});return}
      const tmpimg=store.getState().images.find(e=>String(e.id)===String(store.getState().currentMeme.imageId));
      setimg(tmpimg?tmpimg:{})
  })
}, []);
  return (
  <svg className={styles.SvgDrawer} data-testid="SvgDrawer" viewBox={"0 0 "+(img.w?img.w:0)+" "+(img.w?img.w:0)}>
    <image href={img.url && `img/`+img.url} x={0} y={0}/>
    <text
      x={meme.x}
      y={meme.y}
      fill={meme.color}
      fontSize={meme.fontSize}>{meme.text}</text>
  </svg>
);
}

export default SvgDrawer;
