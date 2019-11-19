import paletteActionTypes from './palette.types';

const INITIAL_STATE = {
    // dataFromLS: [],
    isDarkMode: false
};

const paletteReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case paletteActionTypes.SET_IS_DARK_MODE:
            return {
                ...state,
                isDarkMode: !state.isDarkMode
            }
    }
}

export default paletteReducer;