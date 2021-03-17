import React, { useEffect, useState } from 'react';
import styles from './MemeViever.module.scss';
import SvgDrawer from '../SvgDrawer/SvgDrawer';
import { emptyMeme, store } from '../../store/store';

const MemeViever = (props) => {
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
  return(
  <div className={styles.MemeViever} data-testid="MemeViever">
    <SvgDrawer meme={meme} img={img}/>
  </div>
);}

export default MemeViever;
