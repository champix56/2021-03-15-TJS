import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeEditor.module.scss';
import Button from '../Button/Button'
/**
 * formulaire de meme  
 * @returns react dom render 
 */
const MemeEditor = (props) => {
  // const [images, setimages] = useState([]);
  // useEffect(() => {
  //  fetch('http://localhost:5629/images')
  //   .then(f=>f.json())
  //   .then(o=>{
  //    setimages(o);
  //  });
  // },[]);

  //console.log("cmp form crated")
  return (
    <div className={styles.MemeEditor} data-testid="MemeEditor" style={{ textAlign: 'center' }}>
      <form onSubmit={(evt) => { console.log('form submited', evt) }}>
        <label htmlFor="titre"><h1>Titre</h1></label><br />
        <input name="titre" id="titre" value={props.meme.titre} onChange={(evt) => {
          // setstate({ ...state, titre: evt.target.value })
          props.onchildstatechange({titre:evt.target.value});
        }} />
        <hr />
        <label htmlFor="image"><h2>Image</h2></label><br />
        <select name="image" id="image" value={props.meme.imageId} onChange={(evt) => {
          //const img=props.images.find(e=>String(e.id)===evt.target.value);
          props.onchildstatechange({ imageId: evt.target.value})//,image:img })
        }}  >
         {props.images.map((element,index)=><option key={'option-image-'+index} value={element.id}>{element.url}</option>)}
        </select><hr />
        <label htmlFor="text"><h2>texte</h2></label><br />
        <input name="text" id="text" type="text" value={props.meme.text} onChange={(evt) => {
          props.onchildstatechange({ text: evt.target.value })
        }} />
        <br />
        <label htmlFor="x"><h2 style={{ display: "inline" }}>x :</h2></label><input className={styles.smallNumber} name="x" id="x" type="number" min={0} value={props.meme.x} onChange={(evt) => {
          props.onchildstatechange({ x: evt.target.value })
        }} />
        <label htmlFor="y"><h2 style={{ display: "inline" }}>y :</h2></label>
        <input className={styles.smallNumber} name="y" id="y" type="number" min={0} value={props.meme.y} onChange={(evt) => {
          props.onchildstatechange({ y: evt.target.value })
        }} /><br />
        <label htmlFor="color"><h2 style={{ display: "inline" }}>color :</h2></label>
        <input name="color" id="color" type="color" value={props.meme.color} onChange={(evt) => {
          props.onchildstatechange({ color: evt.target.value })
        }} /><br />

        <label htmlFor="fontSize"><h2 style={{ display: "inline" }}>font-size :</h2></label>
        <input className={styles.smallNumber} name="fontSize" id="fontSize" type="number" value={props.meme.fontSize} min={0} onChange={(evt) => {
          props.onchildstatechange({ fontSize: evt.target.value })
          
        }} />px<br />
        <Button style={{ display: 'inline' }} bgColor="red" onbuttonclicked={(evt => { console.log('reset form clicked') })} value="reset"></Button>
        <Button style={{ display: 'inline' }} bgColor="green" onbuttonclicked={(evt => { console.log('save form clicked') })} value="save"></Button>
      </form>
      {JSON.stringify(props.meme)}<br/>
<h2>Images loaded</h2>
      {JSON.stringify(props.images)}
    </div>
  );
}
MemeEditor.propTypes={
  onchildstatechange:PropTypes.func.isRequired,
  meme:PropTypes.object.isRequired,
  images:PropTypes.array.isRequired
}
MemeEditor.defaultProps={
  onchildstatechange:()=>{},
  meme:{}
}
export default MemeEditor;
