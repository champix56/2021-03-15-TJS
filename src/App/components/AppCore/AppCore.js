import React from 'react';
import MemeViewer from '../MemeViever/MemeViever';
import MemeEditor from '../MemeEditor/MemeEditor';
import style from './AppCore.module.scss';
export default class AppCore extends React.Component {
  constructor(props) {
    //appel du constructeur parent avec les props recus
    super(props);
    //initialisation de l'etat du composant
    this.state = { test: '', titre: 'titre', text: 'text demo', x: 20, y: 20, fontSize: 15, color: '#ACACAC', image: 'img/image1.png' };
  }
  render() {
    return (
      <>
        <div>
          <label>test input :</label>
          <input type="text" value={this.state.test} onChange={(evt)=>{
            this.setState({test:evt.target.value})
          }} />
        </div>
        <div className={style.AppCore} test-id="AppCore">
          <MemeViewer />
          <MemeEditor />
        </div>
        <div>{JSON.stringify(this.state)}</div>
      </>
    );
  }
}
