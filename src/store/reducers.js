
import { combineReducers } from 'redux';

import commentsReducer from 'store/reducerComments';

export default combineReducers({
  comments: commentsReducer
});