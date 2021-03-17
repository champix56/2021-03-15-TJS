import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeEditor.module.scss';
import Button from '../Button/Button'
import { emptyMeme, store, ACTIONS } from '../../store/store';
/**
 * formulaire de meme  
 * @returns react dom render 
 */
const MemeEditor = (props) => {
  const [state, setstate] = useState(emptyMeme);
  const [images, setimages] = useState([]);
  useEffect(() => {
    store.subscribe(() => {
      setimages(store.getState().images)
      setstate(store.getState().currentMeme);
      
    })
  }, []);
  return (
    <div className={styles.MemeEditor} data-testid="MemeEditor" style={{ textAlign: 'center' }}>
      <form onSubmit={(evt) => { console.log('form submited', evt) }}>
        <label htmlFor="titre"><h1>Titre</h1></label><br />
        <input name="titre" id="titre" value={state.titre} onChange={(evt) => {
          store.dispatch({ type: ACTIONS.SET_CURRENT_MEME, value: { ...state, titre: evt.target.value } })
        }} />
        <hr />
        <label htmlFor="image"><h2>Image</h2></label><br />
        <select name="image" id="image" value={state.imageId} onChange={(evt) => {
          store.dispatch({ type: ACTIONS.SET_CURRENT_MEME, value: { ...state, imageId: evt.target.value } })

        }}  >
          {store.getState().images.map((element, index) => <option key={'option-image-' + index} value={element.id}>{element.url}</option>)}
        </select><hr />
        <label htmlFor="text"><h2>texte</h2></label><br />
        <input name="text" id="text" type="text" value={state.text} onChange={(evt) => {
          store.dispatch({ type: ACTIONS.SET_CURRENT_MEME, value: { ...state, text: evt.target.value } })
        }} />
        <br />
        <label htmlFor="x"><h2 style={{ display: "inline" }}>x :</h2></label><input className={styles.smallNumber} name="x" id="x" type="number" min={0} value={state.x} onChange={(evt) => {
          store.dispatch({ type: ACTIONS.SET_CURRENT_MEME, value: { ...state, x: evt.target.value } })

        }} />
        <label htmlFor="y"><h2 style={{ display: "inline" }}>y :</h2></label>
        <input className={styles.smallNumber} name="y" id="y" type="number" min={0} value={state.y} onChange={(evt) => {
          store.dispatch({ type: ACTIONS.SET_CURRENT_MEME, value: { ...state, y: evt.target.value } })
        }} /><br />
        <label htmlFor="color"><h2 style={{ display: "inline" }}>color :</h2></label>
        <input name="color" id="color" type="color" value={state.color} onChange={(evt) => {
          store.dispatch({ type: ACTIONS.SET_CURRENT_MEME, value: { ...state, color: evt.target.value } })

        }} /><br />

        <label htmlFor="fontSize"><h2 style={{ display: "inline" }}>font-size :</h2></label>
        <input className={styles.smallNumber} name="fontSize" id="fontSize" type="number" value={state.fontSize} min={0} onChange={(evt) => {
          store.dispatch({ type: ACTIONS.SET_CURRENT_MEME, value: { ...state, fontSize: evt.target.value } })
        }} />px<br />
        <Button style={{ display: 'inline' }} bgColor="red" onbuttonclicked={(evt => { console.log('reset form clicked') })} value="reset"></Button>
        <Button style={{ display: 'inline' }} bgColor="green" onbuttonclicked={(evt => { console.log('save form clicked') })} value="save"></Button>
      </form>
      {JSON.stringify(props.meme)}<br />
      <h2>Images loaded</h2>
      {JSON.stringify(props.images)}
    </div>
  );
}
MemeEditor.propTypes = {

}
MemeEditor.defaultProps = {
  meme: {}
}
export default MemeEditor;
