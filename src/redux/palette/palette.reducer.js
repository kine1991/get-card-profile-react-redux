import paletteActionTypes from './palette.types';

// lightMode: {background: "#f5f5f5", navbar: "#81c784", element: "white", mainColor: "#37474f"},
// darkMode: {background: "#263238", navbar: "#000", element: "black", mainColor: "#558b2f"}

const INITIAL_STATE = {
    isDarkMode: false,
    currentColor: {
        darkTheme: {
            backgroundMain: '#263238',
            colorMain: '#558b2f',
            backgroundHeader: 'black',
            colorHeader: 'red'
        },
        lightTheme: {
            backgroundMain: '#f5f5f5',
            colorMain: '#37474f',
            backgroundHeader: 'white',
            colorHeader: 'blue',
        },
    }
};

const paletteReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case paletteActionTypes.TOGGLE_DARK_MODE:
            return {
                ...state,
                isDarkMode: action.payload
            }
        default: return state
    }
}

export default paletteReducer;