
import { combineReducers } from 'redux';

import commentsReducer from 'store/reducers/comments';

export default combineReducers({
  comments: commentsReducer
});