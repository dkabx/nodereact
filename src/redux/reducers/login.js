import axios from 'axios';
import jwt from 'jsonwebtoken';
var initialState : {
	
	isAuthenticated:false,
	user :{},
	errors:""
	
};
const loginreducer = (state = initialState,action) => {
	switch(action.type){

		case 'SET_CURRENT_USER':

		state = {...state,user:action.data._doc,isAuthenticated:true,errors:null};
		break;			 

		case 'LOGOUT_USER':

		localStorage.removeItem('jwtToken');
		state = {...state,user:null,isAuthenticated:false,errors:null}
		break;

		case "INVALID_USER":
		 state = {...state,user:null,isAuthenticated:false,errors:"Invalid Crendentials"}
		break;
	}
	
		
	
	return state;
}

export default loginreducer;



		