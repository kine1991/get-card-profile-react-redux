import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import profileReducer from './profile/profile.reducer';
import articleReducer from './article/article.reducer';
import paletteReducer from './palette/palette.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  article: articleReducer,
  palette: paletteReducer,
  
  form: formReducer
});


export default rootReducer;