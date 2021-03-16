import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeEditor.module.scss';
import Button from '../Button/Button'

const MemeEditor = () => {
  return(
  <div className={styles.MemeEditor} data-testid="MemeEditor" style={{textAlign:'center'}}>
    <form onSubmit={(evt) => { console.log('form submited', evt) }}>
      <label htmlFor="titre"><h1>Titre</h1></label><br /><input name="titre" id="titre" /><hr/>
      <label htmlFor="image"><h2>Image</h2></label><br />
      <select name="image" id="image" >
        <option value="img/image1.png">Image 1</option>
      </select><hr/>
      <label htmlFor="text"><h2>texte</h2></label><br/><input name="text" id="text" type="text" /><br/>
      <label htmlFor="x"><h2 style={{display:"inline"}}>x :</h2></label><input className={styles.smallNumber} name="x" id="x" type="number" min={0} onChange={(evt)=>{
       
      }}/>{"posX:"}
      <label htmlFor="y"><h2 style={{display:"inline"}}>y :</h2></label><input  className={styles.smallNumber} name="y" id="y" type="number" min={0}/><br/>
      <label htmlFor="color"><h2 style={{display:"inline"}}>color :</h2></label><input name="color" id="color" type="color"/><br/>

      <label htmlFor="fontSize"><h2 style={{display:"inline"}}>font-size :</h2></label><input className={styles.smallNumber} name="fontSize" id="fontSize" type="number" min={0}/>px<br/>
      <Button style={{display:'inline'}} bgColor="red" onbuttonclicked={(evt=>{console.log('reset form clicked')})} value="reset"></Button>
      <Button style={{display:'inline'}}  bgColor="green" onbuttonclicked={(evt=>{console.log('save form clicked')})} value="save"></Button>
    </form>
  </div>
);}
export default MemeEditor;
