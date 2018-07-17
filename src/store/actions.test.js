
import * as actionType from './actionTypes';

import { addComment, deleteComment } from './actions';

it (`should return action ${actionType.ADD_COMMENT} with type and payload`,()=>{
  let testData="new comment",
  model={
    type: actionType.ADD_COMMENT,
    payload: testData
  }
  let action = addComment(testData);
  expect(action).toEqual(model);
})


it (`should return action ${actionType.DELETE_COMMENT} with type and payload`,()=>{
  let testData=1,
  model={
    type: actionType.DELETE_COMMENT,
    payload: testData
  }
  let action = deleteComment(testData);
  expect(action).toEqual(model);
})