import React from 'react';
import MemeViewer from '../MemeViever/MemeViever';
import MemeEditor from '../MemeEditor/MemeEditor';
import style from './AppCore.module.scss';
import MemeThumbnail from '../MemeThumbnail/MemeThumbnail';
import { Route, Switch } from 'react-router';
import Button from '../Button/Button';
import MemeSeeOne from '../MemeSeeOne/MemeSeeOne';
export default class AppCore extends React.Component {
  render() {
    return (
      <>
        <div className={style.AppCore} test-id="AppCore">
          <Switch>
          <Route path="/" exact>
              <h1>Hello sur le generateur de meme</h1>
            </Route>
            <Route path="/edit">
              <MemeViewer />
              <MemeEditor />
            </Route>
            <Route path="/thumbnail" exact>
              <MemeThumbnail />
            </Route>
            <Route path="/thumbnail/:id">
              <MemeSeeOne />
            </Route>
            {/* mettre l'attribut exact pour cibler que les liens sur '/' */}
            <Route path="/">
              <h1>ERROR 40</h1>
            </Route>
          </Switch>
        </div>
        {/* <div>{JSON.stringify(this.state)}</div> */}
      </>
    );
  }
}
