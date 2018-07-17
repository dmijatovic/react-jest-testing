
import * as actionType from './actionTypes';

import { addComment } from './actions';

it (`should return action ${actionType.ADD_COMMENT} with type and payload`,()=>{
  let testData="new comment",
  model={
    type: actionType.ADD_COMMENT,
    payload: testData
  }
  let action = addComment(testData);
  expect(action).toEqual(model);
})