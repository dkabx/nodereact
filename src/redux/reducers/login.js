import axios from 'axios';
import jwt from 'jsonwebtoken';
var initialState : {
	email:'',
	password:'',
	
};
const loginreducer = (state = initialState,action) => {
	switch(action.type){
		case 'ATTEMPT_LOGIN':
		var send = {
		    "email": action.data.email,
		    "password": action.data.password,
		  };

		  axios({
              url: 'http://localhost:5000/api/authenticate',
              method:'POST',
               headers: {
			    "Content-Type": "application/json"
			  },
	         data: send
            }).then(function(res){    
            console.log(res)  	;
            	var token =  res.data.token;
               	console.log(jwt.decode(token));
            }).catch(function(err){

             
            }); 
		state = {...state,email:action.data.email,password:action.data.password};
		break;

		// case 'SET_CURRENT_USER':
		
	}

	return state;
}

export default loginreducer;


