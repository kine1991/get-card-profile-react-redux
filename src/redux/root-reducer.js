import { combineReducers } from 'redux';

import profileReducer from './profile/profile.reducer';
import articleReducer from './article/article.reducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  article: articleReducer
});

export default rootReducer;