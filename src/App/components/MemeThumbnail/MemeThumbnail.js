import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeThumbnail.module.scss';
import {store} from '../../store/store';
import SvgDrawer from '../SvgDrawer/SvgDrawer';
const MemeThumbnail = () => {
  const [memes, setmemes] = useState([]);
  useEffect(() => {
    store.subscribe(()=>{
      setmemes(store.getState().memes);
    })
  }, []);
  return(
  <div className={styles.MemeThumbnail} data-testid="MemeThumbnail">
    {memes.map((e,i)=>{
      let im=store.getState().images.find(ee=>String(ee.id)===String(e.imageId))
      return <SvgDrawer meme={e} key={'svg-'+i} img={im}/>})}
  </div>
);}

MemeThumbnail.propTypes = {};

MemeThumbnail.defaultProps = {};

export default MemeThumbnail;
