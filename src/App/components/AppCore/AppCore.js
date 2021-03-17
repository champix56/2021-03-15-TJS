import React from 'react';
import MemeViewer from '../MemeViever/MemeViever';
import MemeEditor from '../MemeEditor/MemeEditor';
import style from './AppCore.module.scss';
 import {store,initialState} from '../../store/reducer';
export default class AppCore extends React.Component {
  constructor(props){
    super(props);
    this.state=initialState;
   console.log(store)
  }
  componentDidMount(){
    // store.subscribe(()=>{
    //   this.setState(store.getState());
    // })
  }
  render() {
    return (
      <>
        <div className={style.AppCore} test-id="AppCore">
          <MemeViewer  />
          <MemeEditor />
        </div>
        <div>{JSON.stringify(this.state)}</div>
      </>
    );
  }
}
