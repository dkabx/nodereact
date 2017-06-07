import axios from 'axios';
import setAuthorizationToken from '../utils';
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
            	var token =  res.data.token;
               localStorage.setItem('jwtToken',token);
               setAuthorizationToken(token);
            }).catch(function(err){
              console.log(err);
            });
		state = {...state,email:action.data.email,password:action.data.password};
		
		break;
	}
	return state;
}
export default loginreducer;


