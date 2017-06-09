import axios from 'axios';
import jwt from 'jsonwebtoken';

export const sendLogin = (detail)=>{

var send = {
		    "email": detail.email,
		    "password": detail.password,
		  };


return dispatch => {
	return   axios({
              url: 'http://localhost:5000/api/authenticate',
              method:'POST',
               headers: {
			    "Content-Type": "application/json"
			  },
	         data: send
            }).then(function(res){
            	if(res.data.success){
		             var token =  res.data.token;
		             localStorage.setItem('jwtToken',token);
		             dispatch(setCurrentUser(jwt.decode(token)));
            	}
            	else {

            		dispatch(invalidUser()); 
            	}
           

            });
}
}


// export const sendLogin = (detail)=>{

// return {
// 	type:"ATTEMPT_LOGIN",
// 	data:detail
// }
// };

export const setCurrentUser = (data)=>{

return {
	type:"SET_CURRENT_USER",
	data:data
}
}

export const logoutUser = () =>{
	return {
		type:"LOGOUT_USER",
		data:''
	}
}

export const invalidUser = ()=>{

	return {
		type:"INVALID_USER",
		data:''
	}

}
