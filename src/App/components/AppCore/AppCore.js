import React from 'react';
import MemeViewer from '../MemeViever/MemeViever';
import MemeEditor from '../MemeEditor/MemeEditor';
import style from './AppCore.module.scss';
import MemeThumbnail from '../MemeThumbnail/MemeThumbnail';
export default class AppCore extends React.Component {
  render() {
    return (
      <>
        <div className={style.AppCore} test-id="AppCore">
          <MemeViewer  />
          <MemeEditor />
          <MemeThumbnail/>
        </div>
        {/* <div>{JSON.stringify(this.state)}</div> */}
      </>
    );
  }
}
