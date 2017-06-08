import axios from 'axios';
import jwt from 'jsonwebtoken';
var initialState : {
	
	isAuthenticated:false,
	user :{}
	
};
const loginreducer = (state = initialState,action) => {
	switch(action.type){

		case 'SET_CURRENT_USER':
		console.log(action.data);
		console.log(action.data.exp);
		 // state = {...state,user:action.data._doc,isAuthenticated:true};
		state = {...state,user:action.data._doc,isAuthenticated:true};
		break;			 
	}

	return state;
}

export default loginreducer;



		