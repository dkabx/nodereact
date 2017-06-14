
var initialState = {
  userlist:[],
  msg:[],
  length:0

}
const getUserdetails = (state = initialState,action) =>{
  switch(action.type){

    case 'SET_USER_LIST':
      state = {...state,userlist:action.data};
      break;

        case "SEND_MESSAGE":
        state ={...state,msg:action.msg,length:action.msg.length}

        break;
  }

  return state;

}
export default getUserdetails;
