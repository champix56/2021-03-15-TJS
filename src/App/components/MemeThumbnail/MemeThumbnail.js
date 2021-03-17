import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeThumbnail.module.scss';
import { store } from '../../store/store';
import SvgDrawer from '../SvgDrawer/SvgDrawer';
import { Link } from 'react-router-dom';

const MemeThumbnail = () => {
  const [memes, setmemes] = useState(store.getState().memes);
  useEffect(() => {
    store.subscribe(()=>{
      setmemes(store.getState().memes)
    })
  }, []);
  return (
  <div className={styles.MemeThumbnail} data-testid="MemeThumbnail">
   {memes.map((meme,index)=>{
     console.log(meme)
    const image=store.getState().images.find(e=>String(e.id)===String(meme.imageId))
     return <Link key={'drawer-'+index} to={"/thumbnail/"+meme.id}><SvgDrawer  meme={meme} img={undefined!==image?image:{w:0,h:0}}/></Link>
   })}
  </div>
);}


export default MemeThumbnail;
