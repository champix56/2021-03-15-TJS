import { createStore } from 'redux';

export const initialState = {
  images: [],
  currentMeme: {x:0,y:0,titre:'',text:'',color:'#FFFFFF',imageId:0}
}
export const ACTIONS = {
  SET_MEME_CONTENT: 'SET_MEME_CONTENT'
}
export const Reducer = (state = initialState, action) => {
  if (action.type.includes('@@redux/INIT')) action.type = 'INIT'
  switch (action.type) {

    case 'INIT':
      fetch('http://localhost:5629/images')
        .then(f => f.json()).then(o => {
          console.log(o);
          store.dispatch({ type: 'ADD_IMAGES', values: o })
        })
      return { ...state };
    case 'ADD_IMAGES':
      console.log(action.values);
      return { ...state, images: [...action.values] }
    case ACTIONS.SET_MEME_CONTENT:

    return {...state,currentMeme:{...action.value}}
    default:
      return state
  }
};


export const store = createStore(Reducer);