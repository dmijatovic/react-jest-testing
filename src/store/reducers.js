
import { combineReducers } from 'redux';

import commentsReducer from 'store/reducerComments';
import authReducer from 'store/reducerAuth';

export default combineReducers({
  comments: commentsReducer,
  auth: authReducer
});