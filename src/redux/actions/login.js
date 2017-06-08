import axios from 'axios';
import jwt from 'jsonwebtoken';

export const sendLogin = (detail)=>{

var send = {
		    "email": detail.email,
		    "password": detail.password,
		  };

console.log(detail);
return dispatch => {
	return   axios({
              url: 'http://localhost:5000/api/authenticate',
              method:'POST',
               headers: {
			    "Content-Type": "application/json"
			  },
	         data: "send"
            }).then(function(res){  
             dispatch(setCurrentUser(jwt.decode(token)));  
            console.log(res)  	;
            	var token =  res.data.token;
               	console.log(jwt.decode(token));
            });
}
};


// export const sendLogin = (detail)=>{

// return {
// 	type:"ATTEMPT_LOGIN",
// 	data:detail
// }
// };

export const setCurrentUser = (detail)=>{

return {
	type:"SET_CURRENT_USER",
	data:detail
}
}
