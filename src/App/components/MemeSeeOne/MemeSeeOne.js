import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeSeeOne.module.scss';
import { useParams } from 'react-router';
import SvgDrawer from '../SvgDrawer/SvgDrawer';
import { store } from '../../store/store';


const MemeSeeOne = () => {
  const { id } = useParams();
  
  const [meme, setmeme] = useState(store.getState().memes.find(e => {return String(e.id) === String(id)}));
  const [img, setimg] = useState(store.getState().images.find(e => {return String(e.id) === String(meme.imageId)}));
  useEffect(() => {
    store.subscribe(() => {
      let memeTmp = store.getState().memes.find(e => {
        return String(e.id) === String(id)
      });
      setmeme(memeTmp);
      if(undefined!==memeTmp){
      let imgTmp = store.getState().images.find(e => String(e.id) === String(memeTmp.imageId));
      setimg(undefined !== imgTmp ? imgTmp : { w: 0, h: 0 })}
    })
  }, []);
  console.log('viewer one', img, meme)
  return (<>
    {undefined !== meme && undefined !== img ?
      (<div className={styles.MemeSeeOne} data-testid="MemeSeeOne">
        <h1>{meme.titre}</h1>
        <SvgDrawer meme={meme} img={img} />
      </div>) : null
    }</>)
  
}

MemeSeeOne.propTypes = {};

MemeSeeOne.defaultProps = {};

export default MemeSeeOne;
