import axios from 'axios';
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
              console.log(res);

            }).catch(function(err){
              console.log(err);
            });
		state = {...state,email:action.data.email,password:action.data.password};
		console.log("iuyiu",state);
		break;
	}
	return state;
}
export default loginreducer;


