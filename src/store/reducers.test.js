
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

  })

})