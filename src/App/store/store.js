import { createStore } from 'redux';
const ADR_SRV_REST = "http://localhost:5629";
export const emptyMeme={
    titre:'tyuio',
    text:'Le js m\'a tué',
    x:15,
    y:35,
    color:'#FFFFFF',
    fontSize:18,
    imageId:0
}
const initialState = {
    memes: [],
    images: [],
    currentMeme: emptyMeme
}
//fabrication d'une enum en ES5/6
export const ACTIONS = Object.freeze({
    ADD_MEMES: 'ADD_MEMES',
    ADD_MEME: 'ADD_MEME',
    ADD_IMAGES: 'ADD_IMAGES',
    SET_CURRENT_MEME:'SET_CURRENT_MEME'
});
//acteur sur le state -> gerrer par le store de redux (etape2)
function reducer(state = initialState, action) {
    console.log(action);
    if (action.type.includes('@@redux/INIT')) {
        action.type = 'INIT'
    }
    switch (action.type) {
        //initialisation du store
        case 'INIT':
            console.log('%c%s', 'font-size:24pt;color:tomato;font-weight:900', 'initialisation en cours');
            //recup de la liste d'images
            fetch(`${ADR_SRV_REST}/images`).then(flux => flux.json()).then(array => {
                store.dispatch({ type: ACTIONS.ADD_IMAGES, values: array });
            });
            //recup de la liste de memes
            fetch(`${ADR_SRV_REST}/memes`).then(flux => flux.json()).then(array => {
                store.dispatch({ type: ACTIONS.ADD_MEMES, values: array });
            });
            return state;
        //remplacement des arrays de l'etat
        case ACTIONS.ADD_IMAGES:return {...state,images:action.values};
        case ACTIONS.ADD_MEMES: return { ...state, memes: action.values };
        //ajout dans les arrays de l'etat
        case ACTIONS.ADD_MEME: return { ...state, memes: [...state.memes, action.value] };

        //mise a jour du meme current en cours d'edition
        case ACTIONS.SET_CURRENT_MEME:return {...state,currentMeme:action.value};
        //cas par def. avec retour de l'etat tels qu'il etait car aucune moddif sur l'etat
        default: return state;
    }
}

export const store = createStore(reducer);
//abo aux changements d'etat du store
store.subscribe(() => {
    console.log('etat du store',store.getState());
});
