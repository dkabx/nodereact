
var initialState = {
  userlist:[],
  msg:''

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
        case "SEND_MESSAGE":
        state ={...state,msg:action.data.msg}
        break;
  }

  return state;

}
export default getUserdetails;
