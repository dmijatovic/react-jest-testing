
import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import commentsReducer from 'store/reducerComments';
import authReducer from 'store/reducerAuth';
import loaderReducer from 'store/reducerLoader';

export default combineReducers({
  comments: commentsReducer,
  auth: authReducer,
  loader: loaderReducer,
  //using redux-form in reducer assumes 
  //default prop to be form
  //see https://redux-form.com/6.2.0/docs/api/reducer.md/
  form: formReducer
});