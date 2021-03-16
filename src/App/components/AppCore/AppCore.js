import React from 'react';
import MemeViewer from '../MemeViever/MemeViever';
import MemeEditor from '../MemeEditor/MemeEditor';
import style from './AppCore.module.scss';
export default class AppCore extends React.Component {
  constructor(props) {
    //appel du constructeur parent avec les props recus
    super(props);
    //initialisation de l'etat du composant
    this.state = {
      test: '',
      currentmeme:
      {
        titre: 'titre',
        text: 'text demo',
        x: 20, y: 20,
        fontSize: 15,
        color: '#ACACAC',
        image: 'img/futurama1.jpg'
      },
      images: []
    };
  }
  render() {
    return (
      <>
        <div>
          <label>test input :</label>
          <input type="text" value={this.state.test} onChange={(evt) => {
            this.setState({ test: evt.target.value })
          }} />
        </div>
        <div className={style.AppCore} test-id="AppCore">
          <MemeViewer meme={this.state.currentmeme} />
          <MemeEditor onchildstatechange={childState => {
            this.setState({
              currentmeme: {
                ...this.state.currentmeme,
                ...childState
              }
            });
          }} meme={this.state.currentmeme} />
        </div>
        <div>{JSON.stringify(this.state)}</div>
      </>
    );
  }
}
