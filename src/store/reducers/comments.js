
//CONSTANTS

const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";


// COMMENTS REDUCER function
export default (state=[], action) => {
  switch(action.type){
    case ADD_COMMENT:
      return {
        ...state,
        //add
        comments: state.concat(action.payload)
      }
    case DELETE_COMMENT:
      return{
        ...state,
        comments: [
          ...this.comments.slice(0, action.payload),
          ...this.comments.slice(action.payload + 1)
        ]
      }
    default:
      return state;
  }
}