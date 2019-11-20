import paletteActionTypes from './palette.types';

export const  toggleDarkMode = (mode) => ({
    type: paletteActionTypes.TOGGLE_DARK_MODE,
    payload: mode
});
