
import { combineReducers } from 'redux';

import commentsReducer from 'store/reducerComments';
import authReducer from 'store/reducerAuth';
import loaderReducer from 'store/reducerLoader';

export default combineReducers({
  comments: commentsReducer,
  auth: authReducer,
  loader: loaderReducer
});