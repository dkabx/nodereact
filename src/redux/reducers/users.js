
var initialState = {
  userlist:[],

}
const getUserdetails = (state = initialState,action) =>{
  switch(action.type){

    case 'SET_USER_LIST':
      state = {...state,userlist:action.data};
      break;
      default :
      state ={...state,userlist:initialState};
      break;
      case 'SET_USER_LIST':
        state = {...state,userlist:action.data};
        break;
  }

  return state;

}
export default getUserdetails;