
import * as actionType from 'store/actionTypes';
import commentReducer from 'store/reducerComments';


describe ('commentsReducer',()=>{

  it('should add comment to store',()=>{

    let testComment="Test",
      action={
        type: actionType.ADD_COMMENT,
        payload: testComment
      };
    
    let newState = commentReducer([],action);
    expect(newState).toEqual([action.payload]);
  });

  it('should delete comment [pos=1] from store',()=>{
    let initState=['test1', 'test2', 'test3'],
      action={
        type: actionType.DELETE_COMMENT,
        payload: 1
      },
      expectedState=['test1', 'test3'];
    let newState = commentReducer(initState,action);
    expect(newState).toEqual(expectedState);
  })

})